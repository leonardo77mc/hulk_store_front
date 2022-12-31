/**
 * @interface IMenu
 * @author Leonardo Castillo
 */
export interface IMenu {
  id: number,
  title: string;
  body: IBody[];
}

export interface IBody {
  id: number;
  title: string;
  target?: string;
}
