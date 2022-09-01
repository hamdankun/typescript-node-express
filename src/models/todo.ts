export class Todo {
  constructor(
    public id: string,
    public text: string,
    public status: "active" | "non-active"
  ) {}
}
