import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

/**
 * Custom useDispatch hook for type safety
 */

type DispatchFunction = () => AppDispatch;

export const useUserDispatch: DispatchFunction = useDispatch;
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;
