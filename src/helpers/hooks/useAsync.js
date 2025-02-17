import { useCallback, useReducer, useRef } from "react";
import useSafeDispatch from "./useSafeDispatch";

const defaultState = {
    data: null,
    status: 'idle',
    error: null
}

export default function useAsync(initialState) {

    const initialStateRef = useRef({
        ...defaultState,
        ...initialState
    })

    const [state, unsafeDispatch] = useReducer((state, action) => {
        return { ...state, ...action }
    }, initialStateRef.current)

    const { data, status, error } = state
    const safeSetState = useSafeDispatch(unsafeDispatch)

    const run = useCallback(
        (promise) => {
            if (!promise || !promise.then) {
                throw new Error('The argument must be a promise')
            }

            safeSetState({
                status: 'pending',
                data: null,
                error: null
            })

            return promise.then(
                data => {
                    safeSetState({
                        data,
                        status: 'resolved',
                        error: null
                    })

                    return data
                }, error => {
                    safeSetState({
                        data: null,
                        status: 'rejected',
                        error: JSON.parse(error.message)
                    })

                    return Promise.reject(error)
                }
            )
        },
        [safeSetState]
    )

    const setData = useCallback(
        (data) => {
            safeSetState({ data })
        },
        [safeSetState]
    )

    const setError = useCallback(
        (error) => {
            safeSetState({ error })
        },
        [safeSetState]
    )

    const reset = useCallback(
        () => {
            safeSetState(initialStateRef.current)
        },
        [safeSetState]
    )

    return {
        data, status, error, run, setData, setError, reset,
        isIdle: status === 'idle',
        isLoading: status === 'pending' || status === 'idle',
        isError: status === 'rejected',
        isSuccess: status === 'resolved'
    }
}