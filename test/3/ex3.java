public class ex3 {
    public static void main(String[] args) {
        int a = 1;
        int b = 2;

        System.out.println("Numeros originais:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);

        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("Numeros trocados:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}