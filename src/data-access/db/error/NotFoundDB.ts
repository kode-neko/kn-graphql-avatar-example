class NotFoundDB extends Error {

  constructor(str: string) {
    super(`Not found document ${str}`);
  }

}

export default NotFoundDB;