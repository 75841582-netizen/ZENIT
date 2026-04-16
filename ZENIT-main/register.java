import java.util.ArrayList;
import java.util.Scanner;

public class bucle {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<String> usuarios = new ArrayList<>();

        String email;
        String password;

        // 🔁 Validar email
        while (true) {
            System.out.print("Ingrese email: ");
            email = sc.nextLine();

            if (email.contains("@")) {
                break;
            } else {
                System.out.println("❌ Email inválido");
            }
        }

        // 🔁 Validar password
        while (true) {
            System.out.print("Ingrese password: ");
            password = sc.nextLine();

            if (password.length() >= 4) {
                break;
            } else {
                System.out.println("❌ Mínimo 4 caracteres");
            }
        }

        
        boolean existe = false;

        for (String u : usuarios) {
            if (u.equals(email)) {
                existe = true;
                break;
            }
        }

        if (existe) {
            System.out.println("❌ Usuario ya existe");
        } else {
            usuarios.add(email);
            System.out.println("✅ Usuario registrado");
        }

        sc.close();
    }
}