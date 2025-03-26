const { username, password } = process.env;
// const username = process.env.username;
// const password = process.env.password;

export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.mpvxt.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`;
