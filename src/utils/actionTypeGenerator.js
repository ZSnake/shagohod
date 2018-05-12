// @flow

const actionTypeGenerator = (base: string): string[] => [base, `${base}_SUCCESS`, `${base}_FAILURE`];

export default actionTypeGenerator;
