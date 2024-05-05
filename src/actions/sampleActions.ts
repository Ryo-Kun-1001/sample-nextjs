"use server";

interface FormState {
  error: string;
}
export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  // DBにタスクを作成
  console.log("タスクを作成しました");
  console.log(taskId);
  console.log(formData.get("name"));
  state.error = "エラーが発生しました";
  return state;
};
