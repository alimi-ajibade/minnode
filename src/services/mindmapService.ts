import apiClient from "./api-client";
import IMindMap from "../entities/Mindmap";

class Mindmap<T> {
    deleteMindmap = (id: string) => {
        return apiClient<T>({
            url: `/mindmap/${id}`,
            method: "delete",
            headers: {
                "x-auth-token": localStorage.getItem("access_token"),
            },
        }).then((resp) => resp.data);
    };

    renameMindmap = (id: string, newName: string) => {
        return apiClient<T>({
            url: `/mindmap/${id}`,
            method: "patch",
            headers: {
                "x-auth-token": localStorage.getItem("access_token"),
            },
            data: {
                name: newName,
            },
        }).then((resp) => resp.data);
    };
}

const mindmapService = new Mindmap<IMindMap>();

export default mindmapService;
