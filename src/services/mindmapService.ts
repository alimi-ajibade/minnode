import apiClient from "./api-client";
import IMindMap from "../entities/Mindmap";

interface Identifiable {
    _id: string;
    name: string;
}

class Mindmap<T extends Identifiable> {
    deleteMindmap = (id: string) => {
        return apiClient<T>({
            url: `/mindmap/${id}`,
            method: "delete",
            headers: {
                "x-auth-token": localStorage.getItem("access_token"),
            },
        }).then((resp) => resp.data);
    };

    renameMindmap = (modifiedData: T) => {
        return apiClient<T>({
            url: `/mindmap/${modifiedData._id}`,
            method: "patch",
            headers: {
                "x-auth-token": localStorage.getItem("access_token"),
            },
            data: {
                name: modifiedData.name,
            },
        }).then((resp) => resp.data);
    };
}

const mindmapService = new Mindmap<IMindMap>();

export default mindmapService;
