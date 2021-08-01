export enum EnumTag {
  enhancement = 'enhancement',
  bug = 'bug',
}

export enum EnumColor {
  blue = 'blue',
  red = 'red',
}

export const tagsColor = {
  enhancement: EnumColor.blue,
  bug: EnumColor.red,
};

export const tags = [EnumTag.enhancement, EnumTag.bug];
