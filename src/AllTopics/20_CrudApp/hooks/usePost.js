import { useState } from "react";

export const usePost = () => {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    return {post, loading};
};