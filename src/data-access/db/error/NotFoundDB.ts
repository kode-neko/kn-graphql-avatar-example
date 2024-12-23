class NotFoundDB extends Error {

  constructor(str: string) {
    super(str);
  }

}

export default NotFoundDB;