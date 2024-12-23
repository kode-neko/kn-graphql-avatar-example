import { NotFoundDB } from "../error";

interface IModelDB<T> {
  read(id: string): (Promise<T> | NotFoundDB);
  readList(skip: string, limit: string): (Promise<T>[] | NotFoundDB);
  create(obj: T): (Promise<T> | NotFoundDB);
  update(obj: T): (Promise<boolean> | NotFoundDB);
  delete(id: string): (Promise<boolean> | NotFoundDB);
}

export default IModelDB