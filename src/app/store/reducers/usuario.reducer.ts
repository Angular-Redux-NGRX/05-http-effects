import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface usuarioState {
  id: string;
  user: Usuario | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: usuarioState = {
  id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,

  on(actions.cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id: id,
  })),
  on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...usuario},
  })),
  on(actions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function usuarioReducer(state: usuarioState | undefined, action: Action) {
  return _usuarioReducer(state, action);
}
