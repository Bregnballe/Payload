import { buildConfig } from "payload/config";
import path from "path";
import TodoLists from "./collections/TodoLists";
import Users from "./collections/Users";
import Names from "./collections/Names";

export default buildConfig({
	serverURL: "http://localhost:3000",
	cors: "*",
	admin: {
		user: Users.slug,
	},
	collections: [TodoLists, Users, Names],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
});
