import { NotFoundDB } from "../error";

interface IModelDb<T> {
  read(id: string): (Promise<T> | NotFoundDB);
  readList(skip: number, limit: number): (Promise<T[]> | NotFoundDB);
  create(obj: T): (Promise<T> | NotFoundDB);
  update(obj: T): (Promise<void> | NotFoundDB);
  delete(id: string): (Promise<void> | NotFoundDB);
}

export default IModelDb