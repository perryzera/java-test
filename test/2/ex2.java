public class ex2 {
    public static void main(String[] args) {
        String input = "S o m, t e s t e  s o m, t e s t a n d o";
        String result = semEspaco(input);
        System.out.println("COM espacos: " + input);
        System.out.println("SEM espacos: " + result);
    }

    public static String semEspaco(String input) {
        StringBuilder noSpaces = new StringBuilder();
        for (char c : input.toCharArray()) {
            if (c != ' ') {
                noSpaces.append(c);
            }
        }
        return noSpaces.toString();
    }
}
