import { useCallback } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../index";

import {
  setCreateNewBlog as setCreateNewBlogAction,
  updateTitle as updateTitleAction,
  updateContent as updateContentAction,
} from "./index";

export const useBlogState = () => {
  const dispatch = useAppDispatch();
  const blogData = useSelector((state) => state.blogState);

  const setCreateNewBlog = useCallback(() => {
    dispatch(setCreateNewBlogAction());
  }, [dispatch]);

  const setBlogId = useCallback(
    (data) => {
      dispatch(updateContentAction(data));
    },
    [dispatch]
  );

  const updateTitle = useCallback(
    (data) => {
      dispatch(updateTitleAction(data));
    },
    [dispatch]
  );

  const updateContent = useCallback(
    (data) => {
      dispatch(updateContentAction(data));
    },
    [dispatch]
  );

  return {
    title: blogData.title,
    content: blogData.content,
    reducers: {
      setCreateNewBlog,
      setBlogId,
      updateTitle,
      updateContent,
    },
  };
};
