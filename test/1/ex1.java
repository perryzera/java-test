import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ex1 {
    public static void main(String[] args) {
        List<String> strings = Arrays.asList("abc", "abd", "ab", "a", "xyz", "acd", "aaa", "bbb", "acc");
        List<String> result = filterStrings(strings);
        System.out.println(result);
    }

    public static List<String> filterStrings(List<String> strings) {
        return strings.stream()
                .filter(s -> s.startsWith("a") && s.length() == 3)
                .collect(Collectors.toList());
    }
}
