import {IReactionDisposer} from 'mobx';

interface IObservable {
  dispose: () => void;
  disposerList: IReactionDisposer[];
}

export type {IObservable};
