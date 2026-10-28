#include <iostream>
#include <string>

void startProposal() {
    int choice;
    std::cout << "========================================\n";
    std::cout << "🌹 Uchrashuvga taklifnoma tizimi ❤️\n";
    std::cout << "========================================\n";
    std::cout << "Savol: Bugun kechqurun men bilan kofe ichishga borasanmi? ✨\n\n";

    std::cout << "1. Ha, albatta! 🥰\n";
    std::cout << "2. Yo'q 😜\n";
    std::cout << "\nJavobingizni tanlang (1 yoki 2): ";
    std::cin >> choice;

    if (choice == 1) {
        std::cout << "\n----------------------------------------\n";
        std::cout << "🎉 Yeeeey! Bilardim rozilik berishingni! 😍\n";
        std::cout << "📍 Joy: Shinam qahvaxona\n";
        std::cout << "⏰ Vaqt: Bugun soat 19:00 da\n";
        std::cout << "Seni intiqlik bilan kutaman! ❤️\n";
        std::cout << "----------------------------------------\n";
    }
    else {
        std::cout << "\n❌ Voy, xato tugmani bosdingiz! 'Yo'q' degan javob qabul qilinmaydi 😜\n";
        std::cout << "Keling, boshidan boshlaymiz:\n\n";
        startProposal(); // Qayta so'rash
    }
}

int main() {
    startProposal();
    return 0;
}