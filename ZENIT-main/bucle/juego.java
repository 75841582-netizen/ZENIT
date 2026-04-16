public class juego {public static void main(String[] args) {
        int vidas = 3;
        System.out.println("--- INICIO DEL JUEGO ---");
        // El bucle continúa mientras las vidas sean mayores a 0
        while (vidas > 0) {
            System.out.println("Tienes " + vidas + " vidas restantes.");
            System.out.println("¡Oh no! Has caído en una trampa.");
            vidas--;
            System.out.println("---");
        }
        System.out.println("GAME OVER. Te has quedado sin vidas.");
    }
    
}
