import { useState } from "react";
import ReactFlow, { Node, Edge, NodeMouseHandler } from "reactflow";
import "reactflow/dist/style.css";
import { TreeNode } from "../types/tree";

type Props = {
  tree: TreeNode;
};

export function TreeCanvas({ tree }: Props) {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: tree.id,
      data: { label: tree.label },
      position: { x: 0, y: 0 }
    }
  ]);

  const [edges, setEdges] = useState<Edge[]>([]);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const findNodeById = (node: TreeNode, id: string): TreeNode | null => {
    if (node.id === id) return node;
    if (!node.children) return null;

    for (const child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
    return null;
  };

  const onNodeClick: NodeMouseHandler = (_, clickedNode) => {
    if (expanded.has(clickedNode.id)) return;

    const treeNode = findNodeById(tree, clickedNode.id);
    if (!treeNode || !treeNode.children) return;

    const baseX = clickedNode.position.x;
    const baseY = clickedNode.position.y + 120;

    const newNodes: Node[] = treeNode.children.map((child, index) => ({
      id: child.id,
      data: { label: child.label },
      position: {
        x: baseX + index * 200 - (treeNode.children!.length - 1) * 100,
        y: baseY
      }
    }));

    const newEdges: Edge[] = treeNode.children.map((child) => ({
      id: `${clickedNode.id}-${child.id}`,
      source: clickedNode.id,
      target: child.id
    }));

    setNodes((prev) => [...prev, ...newNodes]);
    setEdges((prev) => [...prev, ...newEdges]);
    setExpanded((prev) => new Set(prev).add(clickedNode.id));
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <ReactFlow nodes={nodes} edges={edges} onNodeClick={onNodeClick} />
    </div>
  );
}
