import java.util.ArrayList;
import java.util.List;

public class Solution {

    // <summary>
    //     Given an outer tree and an inner tree, indicate whether
    //     the inner tree is a sub tree of the outer one.
    // </summary>
    // <remarks>
    //     class Tree {
    //        int data;
    //        Tree left, right;
    //     }
    //
    //     Example:
    //         Input:  null | null
    //         Output: false
    //
    //         Input:  (1) || null
    //         Output: false
    //
    //         Input:  null || (1)
    //         Output: false
    //
    //         Input:               (1)        |      (20)
    //                             /   \       |      /   \
    //                           (2)   (3)     |    (21)  (22)
    //                          /   \          |
    //                         (4)  (5)        |
    //                             /   \       |
    //                           (6)   (7)     |
    //                          /   \          |
    //                       (8)     (9)       |
    //                      /   \    /   \     |
    //                    (10) (11) (12) (13)  |
    //
    //         Output: false
    //
    //         Input:               (1)        |       (2)
    //                             /   \       |      /   \
    //                           (2)   (3)     |    (4)   (5)
    //                          /   \          |         /   \
    //                         (4)  (5)        |       (6)   (7)
    //                             /   \       |
    //                           (6)   (7)     |
    //                          /   \          |
    //                       (8)     (9)       |
    //                      /   \    /   \     |
    //                    (10) (11) (12) (13)  |
    //
    //         Output: true
    // </remarks>

    public boolean isSubtree(Tree outer, Tree inner) {
        return false;
    }
  
    public boolean areEqual(Tree outer, Tree inner) {
        return false;
    }
 
    public class Tree {
        public int data;
 
        public Tree left, right;
   
        public Tree(int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    public static void main(String args[]) {
        Solution solution = new Solution();

        System.out.println("\nTesting outer and inner null input...");
        solution.testOuterAndInnerNullInput();

        System.out.println("\nTesting outer null input...");
        solution.testOuterNullInput();

        System.out.println("\nTesting inner null input...");
        solution.testInnerNullInput();

        System.out.println("\nTesting not sub tree input...");
        solution.testNotSubTreeInput();

        System.out.println("\nTesting sub tree input...");
        solution.testSubTreeInput();
    }

    public void testOuterAndInnerNullInput() {
        boolean result = isSubtree(null, null);
        System.out.println(String.format("Output: %s", result));
    }

    public void testOuterNullInput() {
        boolean result = isSubtree(null, new Tree(1));
        System.out.println(String.format("Output: %s", result));
    }

    public void testInnerNullInput() {
        boolean result = isSubtree(new Tree(1), null);
        System.out.println(String.format("Output: %s", result));
    }

    public void testNotSubTreeInput() {
        Tree outer = CreateTree(1);
        Tree inner = CreateTree(20);

        boolean result = isSubtree(outer, inner);
        System.out.println(String.format("Output: %s", result));
    }

    public void testSubTreeInput() {
        Tree outer = CreateTree(1);
        Tree inner = outer.left.right;

        boolean result = isSubtree(outer, inner);
        System.out.println(String.format("Output: %s", result));
    }

    public Tree CreateTree(final int startingNode) {
        Tree result = new Tree(startingNode);

        result.left = new Tree(startingNode + 1);
        result.right = new Tree(startingNode + 2);

        result.left.left = new Tree(startingNode + 3);
        result.left.right = new Tree(startingNode + 4);

        result.left.right.left = new Tree(startingNode + 5);
        result.left.right.right = new Tree(startingNode + 6);

        result.left.right.left.left = new Tree(startingNode + 7);
        result.left.right.left.right = new Tree(startingNode + 8);

        result.left.right.left.left.left = new Tree(startingNode + 9);
        result.left.right.left.left.right = new Tree(startingNode + 10);

        result.left.right.left.right.left = new Tree(startingNode + 11);
        result.left.right.left.right.right = new Tree(startingNode + 12);

        return result;
    }
}
