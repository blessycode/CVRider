import { protectRoute } from "@/lib/auth/utils";
import { EditorClient } from "./components/EditorClient";
import { auth } from "@/auth";

export default async function Editor() {
    await protectRoute();
    const session = await auth();

    return <EditorClient session={session} />;
}
