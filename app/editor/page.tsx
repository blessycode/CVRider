import { protectRoute } from "@/lib/auth/utils";
import { EditorClient } from "./components/EditorClient";

export default async function Editor() {
    await protectRoute();

    return <EditorClient />;
}
