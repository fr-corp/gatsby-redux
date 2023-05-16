declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "@redux" {
  const redux: any;
  export default redux;
}
