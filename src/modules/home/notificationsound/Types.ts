export type ItemType = {
  id: number;
  name: string;
  file: string;
  selected: number;
};

export type RenderItemType = {
  item: ItemType;
  handlePress: (item: ItemType) => void;
};
