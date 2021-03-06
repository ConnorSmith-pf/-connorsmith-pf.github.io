export interface HeaderButton {
  id: string;
  name: string;
  displayName: string;
  onClick?: () => {};
  class?: string;
  childButtons?: Array<HeaderButton>;
}
