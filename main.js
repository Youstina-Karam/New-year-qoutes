
const arrayOfQuotes = [
  "الحياة مستمرة سواء ضحكت أم بكيت، فلا تُحمّل نفسك هموماً لن تستفيد منها وابتسم",
  "الأفكار الإيجابية تعطي أفكار إيجابية والأفكار السلبية تعطي أفكار سلبية",
  "لا تقل أبداً أني سوف أفشل، فإنّ عقلك الباطن لا يأخذ الأمر بشكل هزلي بل إنهُ يشرع فوراً بتحقيقه ",
  "قمّة المجد ليست في عدم الإخفاق والفشل، بل في القيام بعد كل عثرة ",
  "أنا أسير ببطء، لكن أبداً لا أسير إلى الخلف ",
  "ليس خطوة واحدة عملاقة التي حقَّقت الإنجاز، إنَّما مجموعة خطوات صغيرة ",
  "الفرق بين الانسان الناجح والآخرين هو ليس نقص القوّة، ولا نقص المعرفة، إنَّما نقص الإرادة ",
  "النجاح يحقِّقه فقط الذين يواصلون المحاولة بنظرة إيجابيّة للأشياء ",
  "لا تتخلَّى عن أحلامك، المعجزات تحدث كلَّ يوم ",
  "عليك أن تفعل الأشياء التي تعتقد أنّه ليس باستطاعتك أن تفعلها ",
  "ما الفشل إلّا هزيمة مؤقّتة تخلق لك فرص النجاح ",
  "ما يدركه ويؤمن به عقل الإنسان يمكنه أن يحقِّقه ",
  "إنَّ الحياة ليست سهلة لأيٍّ منّا لذلك يجب أن نكون مثابرين، صابرين، أقوياء، وأن نؤمن بقدرتنا على التحرُّر من كل ما يتحكَّم فينا، وبذلك سنثق بأنفسنا ونحقِّق ما ثابرنا لأجله، والأهم من هذا كلّه سنشعر بالرضى والسعادة ",
  "يرى المتشائم الصعوبة في كل فرصة، أمّا المتفائل فيرى الفرصة في كل صعوبة ",
  "المنافسة الحقيقيّة دائماً ما تكون بين ما تقوم بعمله وما أنت قادر على عمله، فالسرُّ في ذلك هو أنّك تقيس نفسك مع نفسك وليس مع أي شخص آخر ",
  "ربما تفشل إذا خاطرت، ولكن من المؤكَّد أنّك ستفشل إذا لم تخاطر ",
  "أنت من تجعل الاستحالة موجودة وتجعلها تُحيط بك، فإذا قرّرت وفكّرت وخطّطت وقمت بالفعل فلن يكون هناك مستحيل ",
  "لا تجعل قانونك أنا أعمل لأعيش بل اجعل قانونك أنا أعمل لأحقِّق ذاتي ",
  "رحلة الألف ميل تبدأ بخطوة ",
  "رحلة النجاح لا تتطلب البحث عن أرض جديدة ولكنها تتطلب الإهتمام بالنجاح والرغبة في تحقيقه ",
  "لا تدع الخوف من الفشل يمنعك من تحقيق أحلامك، فالخطوة الأولى نحو النجاح هي المخاطرة ",
  "اعمل بذكاء واستمتع بما تفعل، وستكون نتائجك مدهشة ",
  "التخطيط والتنظيم هما أساس العمل الناجح ",
  "استفد من أخطائك وتعلم منها، ولا تيأس في وجه التحديات ",
  "استمر في النمو المهني وتطوير مهاراتك، وستتجاوز حدودك الحالية",
];

var previousRandom = null;
function newQuote() {
  var random;
  do {
    random = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (random === previousRandom);

  document.getElementById("quote").innerHTML = arrayOfQuotes[random];

  previousRandom = random;
}