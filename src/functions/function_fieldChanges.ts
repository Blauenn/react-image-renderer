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

export const toggleCheckbox = (
  key: keyof OtherInfo,
  event: React.ChangeEvent<HTMLInputElement>,
  setOtherInfo: React.Dispatch<React.SetStateAction<OtherInfo>>
) => {
  const isChecked = event.target.checked;
  setOtherInfo((prevOtherInfo) => ({
    ...prevOtherInfo,
    [key]: isChecked,
  }));
};
