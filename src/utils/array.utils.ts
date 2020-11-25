export const joinWithCommas = (dataList: any[], fieldName: string = 'name'): string => {
  return dataList.reduce((accumulator, currentValue, index) => {
    if (index > 0) accumulator += ', ';
    accumulator += currentValue[fieldName];
    return accumulator;
  }, '');
}
