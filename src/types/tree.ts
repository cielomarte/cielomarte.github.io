export type NodeType =
  | "root"
  | "foundation"
  | "function"
  | "domain"
  | "specialization";

export interface TreeNode {
  id: string;
  label: string;
  type: NodeType;
  children?: TreeNode[];
}
