// Konsol (Terminal) orqali ishlaydigan interaktiv taklifnoma skripti
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startProposal() {
    console.log("========================================");
    console.log("🌹 Uchrashuvga taklifnoma tizimi ❤️");
    console.log("========================================");
    console.log("Savol: Bugun kechqurun men bilan kofe ichishga borasanmi? ✨\n");

    console.log("1. Ha, albatta! 🥰");
    console.log("2. Yo'q 😜 (Lekin bu tugma ishlamaydi)");

    rl.question("\nJavobingizni tanlang (1 yoki 2): ", (answer) => {
        if (answer.trim() === '1') {
            console.log("\n----------------------------------------");
            console.log("🎉 Yeeeey! Bilardim rozilik berishingni! 😍");
            console.log("📍 Joy: Shinam qahvaxona");
            console.log("⏰ Vaqt: Bugun soat 19:00 da");
            console.log("Seni intiqlik bilan kutaman! ❤️");
            console.log("----------------------------------------");
            rl.close();
        } else {
            console.log("\n❌ Voy, xato tugmani bosdingiz! 'Yo'q' degan javob qabul qilinmaydi 😜");
            console.log("Keling, boshtann boshlaymiz:\n");
            startProposal(); // Qayta so'rash
        }
    });
}

startProposal();