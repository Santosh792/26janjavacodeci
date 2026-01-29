import java.time.LocalDate;
import java.time.Month;
import java.time.temporal.ChronoUnit;

public class helloworld {
	public static void main(String[] args) {
		LocalDate today = LocalDate.now();
		LocalDate jan26 = LocalDate.of(today.getYear(), Month.JANUARY, 26);

		System.out.println("Java program about 26 January");
		System.out.println("Today: " + today);

		if (today.equals(jan26)) {
			System.out.println("Today is 26 January!");
		} else if (today.isBefore(jan26)) {
			long days = ChronoUnit.DAYS.between(today, jan26);
			System.out.printf("There are santosh %d days until 26 January %d%n", days, jan26.getYear());
		} else {
			long daysSince = ChronoUnit.DAYS.between(jan26, today);
			LocalDate nextJan26 = jan26.plusYears(1);
			long daysUntilNext = ChronoUnit.DAYS.between(today, nextJan26);
			System.out.printf("It has been %d days since 26 January %d%n", daysSince, jan26.getYear());
			System.out.printf("There are %d days until 26 January %d%n", daysUntilNext, nextJan26.getYear());
		}
	}
}
