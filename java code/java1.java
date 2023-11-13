//Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
public class ArrayShuffle {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};

        shuffleArray(array);

       
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        for (int i = n - 1; i > 0; i--) {
            int j = (int) (Math.random() * (i + 1)); 
            
            int temp = array[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
