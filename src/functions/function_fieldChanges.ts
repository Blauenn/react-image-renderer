export const fieldChanges = (
  event: React.ChangeEvent<HTMLInputElement>,
  key: string,
  setInfo: React.Dispatch<React.SetStateAction<any>>
) => {
  const { value } = event.target;
  setInfo((prevState: any) => ({
    ...prevState,
    [key]: value,
  }));
};
