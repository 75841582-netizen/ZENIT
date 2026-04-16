public class bucle{
    public static void main(String[] args) {

        int saldo = 180;
        int monto = 50;
        int contador = 1;

        do {
            System.out.println("Yape #" + contador + " de S/" + monto);

            saldo -= monto;
            contador++;

        } while (saldo >= monto);

        System.out.println("Ya no alcanza para más yapes");
        System.out.println("Saldo restante: S/" + saldo);
    }
}