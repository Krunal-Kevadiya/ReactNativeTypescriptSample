export type ImageUrlPropsType = {
  url?: string;
  style?: object;
  onError: () => void;
};

export type ImageStaticPropsType = {
  image?: number;
  style?: object;
};

export type ImageTextPropsType = {
  text?: string;
  style?: object;
};

export type ImageOverlapPropsType = {
  icon?: number;
  style: object;
  imageStyle?: object;
};

export type ProfileAvatarPropsType = {
  url?: string;
  image?: number;
  text?: string;
  icon?: number;
  style: object;
  textStyle?: object;
  imageStyle?: object;
  onPress?: () => void;
};
