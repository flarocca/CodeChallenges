using System;
using System.Linq;

namespace CodeChallenges.DotNet.LinkedLists
{
    public class Solution
    {
        // <summary>
        //     Given the head of a singly linked list,
        //     swap the order of each pair of elements.
        // </summary>
        // <param name="head">
        //     The head of the list.
        // </param>
        // <remarks>
        //     class Node {
        //        int data;
        //        Node next;
        //     }
        //
        //     Example:
        //         Input:  null
        //         Output: null
        //
        //         Input:  (1)
        //         Output: (1) -> null
        //
        //         Input:  (1) -> (2) -> (3) -> (4) -> (5)
        //         Output: (2) -> (1) -> (4) -> (3) -> (5) -> null
        //
        //         Input:  (1) -> (2) -> (3) -> (4) -> (5) -> (6)
        //         Output: (2) -> (1) -> (4) -> (3) -> (6) -> (5) -> null
        // </remarks>

        public Node SwapPairs(Node head)
        {
            return head;
        }

        public class Node
        {
            public Node Next { get; set; }

            public int Data { get; }

            public Node(int data)
            {
              this.Data = data;
            }

            public override string ToString()
            {
                if (Next != null)
                {
                    return $"({Data}) -> {Next}";
                }
                else
                {
                    return $"({Data}) -> null";
                }
            }
        }

        static void Main(string[] args)
        {
            Solution solution = new Solution();

            Console.WriteLine("\nTesting odd input...");
            solution.TestOddInput();

            Console.WriteLine("\nTesting even input...");
            solution.TestEvenInput();

            Console.WriteLine("\nTesting small input...");
            solution.TestSmallInput();

            Console.WriteLine("\nTesting null input...");
            solution.TestNullInput();
        }

        public void TestOddInput()
        {
            Node head = CreateList(5);
            Console.WriteLine($"Input:  {head.ToString()}");

            head = SwapPairs(head);
            Console.WriteLine($"Output: {head.ToString()}");
        }

        public void TestEvenInput()
        {
            var head = CreateList(6);
            Console.WriteLine($"Input:  {head.ToString()}");

            head = SwapPairs(head);
            Console.WriteLine($"Output: {head.ToString()}");
        }

        public void TestSmallInput()
        {
            var head = new Node(1);
            Console.WriteLine($"Input:  {head.ToString()}");

            head = SwapPairs(head);
            Console.WriteLine($"Output: {head.ToString()}");
        }

        public void TestNullInput()
        {
            Console.WriteLine("Input:  null");

            var head = SwapPairs(null);
            Console.WriteLine(
                head == null ? "Output: null" : $"Output: {head.ToString()}"
            );
        }

        public Node CreateList(int count)
        {
            var nodes = Enumerable.Range(1, count).Select(i => new Node(i)).ToList();

            for (int i = 0; i < nodes.Count - 1; i++)
            {
                nodes[i].Next = nodes[i + 1];
            }

            return nodes[0];
        }
    }
}
