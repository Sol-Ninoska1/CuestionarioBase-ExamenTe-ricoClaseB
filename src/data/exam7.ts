import type { Question } from '../types'
import pregunta235 from '../assets/pregunta235.png'
import pregunta236 from '../assets/pregunta236.png'
import pregunta242 from '../assets/pregunta242.png'
import pregunta244 from '../assets/pregunta244.png'
import pregunta245 from '../assets/pregunta245.png'

export const exam7Questions: Question[] = [
  {
    id: 211,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción bajo la lluvia?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Cuando los neumáticos son nuevos no hay riesgo de que éstos patinen a consecuencia del agua en la calzada.',
      },
      {
        key: 'b',
        text: 'Independientemente del estado de los neumáticos, el riesgo de que éstos patinen es mayor mientras mayor es la velocidad.',
      },
      {
        key: 'c',
        text: 'El riesgo de que los neumáticos patinen es menor cuando recién ha comenzado a llover.',
      },
      {
        key: 'd',
        text: 'Cuando los frenos están buenos el riesgo de patinaje no existe.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 212,
    text: '¿Cuáles son las 2 causas más comunes de los resbalones ante la existencia de agua en la calzada?',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    options: [
      { key: 'a', text: 'Frenos en mal estado.' },
      { key: 'b', text: 'Neumáticos desgastados.' },
      {
        key: 'c',
        text: 'Exceso de velocidad en relación a las condiciones de la calzada.',
      },
      { key: 'd', text: 'Fallas en el sistema de dirección.' },
    ],
    correct: ['b', 'c'],
  },
  {
    id: 213,
    text: 'Viajando de noche usted es encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Bajar su visor de protección solar.' },
      { key: 'b', text: 'Poner luces delanteras altas.' },
      { key: 'c', text: 'Poner su mano sobre sus ojos.' },
      {
        key: 'd',
        text: 'Bajar la velocidad y eventualmente detenerse.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 214,
    text: 'Conduciendo de noche usted se ve encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Frenar fuerte.' },
      {
        key: 'b',
        text: 'Acelerar para alejarse rápido del vehículo que lo encandila.',
      },
      { key: 'c', text: 'Hacer parpadear sus luces.' },
      { key: 'd', text: 'Bajar la velocidad o detenerse.' },
    ],
    correct: ['d'],
  },
  {
    id: 215,
    text: 'Al frenar en una calzada mojada su vehículo comienza a patinar. ¿Qué es lo primero que usted debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Soltar el freno completamente.' },
      { key: 'b', text: 'Tirar rápidamente del freno de mano.' },
      { key: 'c', text: 'Apretar con más fuerza el pedal de freno.' },
      { key: 'd', text: 'Poner el pie en el pedal de embrague.' },
    ],
    correct: ['a'],
  },
  {
    id: 216,
    text: '¿Cómo puede usted evitar que los neumáticos patinen cuando la calzada está con hielo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Manteniéndose siempre en primera.' },
      {
        key: 'b',
        text: 'Poniendo el freno de mano si las ruedas comienzan a patinar.',
      },
      {
        key: 'c',
        text: 'Conduciendo lentamente en la marcha más alta posible.',
      },
      { key: 'd', text: 'Conduciendo en neutro.' },
    ],
    correct: ['c'],
  },
  {
    id: 217,
    text: 'Cuando la calzada está con hielo la distancia de frenado puede ser ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: '2 veces la distancia normal.' },
      { key: 'b', text: '5 veces la distancia normal.' },
      { key: 'c', text: '7 veces la distancia normal.' },
      { key: 'd', text: '10 veces la distancia normal.' },
    ],
    correct: ['d'],
  },
  {
    id: 218,
    text: 'Al conducir con neblina a la luz del día, ¿qué luces enciende usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Las luces delanteras bajas.' },
      { key: 'b', text: 'Las luces de estacionamiento.' },
      { key: 'c', text: 'Las luces delanteras altas.' },
      { key: 'd', text: 'Las luces de advertencia de peligro.' },
    ],
    correct: ['a'],
  },
  {
    id: 219,
    text: 'Al conducir sobre una calzada con hielo usted siente la dirección de su vehículo más liviana. ¿Por qué sucede esto?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Porque los neumáticos tienen menos adherencia a la calzada.',
      },
      {
        key: 'b',
        text: 'Porque los neumáticos tienen más adherencia a la calzada.',
      },
      { key: 'c', text: 'Porque los neumáticos están demasiado blandos.' },
      { key: 'd', text: 'Porque los neumáticos están demasiado duros.' },
    ],
    correct: ['a'],
  },
  {
    id: 220,
    text: '¿Cuándo es su distancia de detención total mucho más larga?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Cuando hay neblina.' },
      { key: 'b', text: 'Cuando es de noche.' },
      { key: 'c', text: 'Cuando está lloviendo.' },
      { key: 'd', text: 'Cuando hay vientos fuertes.' },
    ],
    correct: ['c'],
  },
  {
    id: 221,
    text: 'Usted acaba de conducir a través de una calle inundada. ¿Qué es lo primero que debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Chequear sus frenos.' },
      { key: 'b', text: 'Detenerse y revisar sus neumáticos.' },
      { key: 'c', text: 'Detenerse y secar sus frenos.' },
      { key: 'd', text: 'Activar su limpiaparabrisas.' },
    ],
    correct: ['a'],
  },
  {
    id: 222,
    text: '¿Cómo puede usted evitar que su vehículo patine cuando la calzada está cubierta con una capa de hielo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Usando el freno de mano si las ruedas comienzan a resbalar.',
      },
      {
        key: 'b',
        text: 'Conduciendo a una velocidad baja en el cambio más alto posible.',
      },
      { key: 'c', text: 'Frenando suave y repetidamente.' },
      {
        key: 'd',
        text: 'Conduciendo en un cambio bajo todo el tiempo.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 223,
    text: 'Usted está conduciendo bajo mucha lluvia y repentinamente siente la dirección muy liviana. ¿Qué hace usted para tener nuevamente el control de su vehículo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Cambia a una marcha más baja.' },
      { key: 'b', text: 'Frena levemente para reducir la velocidad.' },
      {
        key: 'c',
        text: 'Guía el vehículo por la parte más seca de la calzada.',
      },
      { key: 'd', text: 'Suelta el acelerador.' },
    ],
    correct: ['d'],
  },
  {
    id: 224,
    text: 'Cuando hay nieve lo mejor es conducir manteniéndose en la marcha más alta posible. ¿Por qué es esto?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Para reducir rápidamente la velocidad al frenar.' },
      {
        key: 'b',
        text: 'Para que el patinaje de las ruedas no haga que el motor funcione demasiado rápido.',
      },
      { key: 'c', text: 'Para ayudar a evitar que las ruedas patinen.' },
      {
        key: 'd',
        text: 'Para dejar disponible una marcha baja en el caso de que las ruedas patinen.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 225,
    text: '¿Cuál es la principal razón por la cual su distancia de detención total es mayor después de una lluvia torrencial?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Porque puede que usted no vea las pozas grandes.' },
      {
        key: 'b',
        text: 'Porque los frenos estarán fríos al estar mojados.',
      },
      {
        key: 'c',
        text: 'Porque sus neumáticos tendrán menos adherencia sobre la calzada.',
      },
      {
        key: 'd',
        text: 'Porque el agua sobre el parabrisas nublará su visión hacia el frente.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 226,
    text: 'En una ocasión de mucha neblina usted va detrás de otros vehículos y lleva encendidas sus luces bajas. ¿De qué otra forma puede reducir las probabilidades de verse involucrado en un accidente?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Usando sus luces altas en vez de bajas.' },
      {
        key: 'b',
        text: 'Circulando a baja velocidad y aumentando la distancia al vehículo que va adelante.',
      },
      {
        key: 'c',
        text: 'Manteniéndose cerca del vehículo que va delante suyo.',
      },
      {
        key: 'd',
        text: 'Encendiendo sus luces de advertencia de peligro.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 227,
    text: 'En un pavimento mojado usted va circulando detrás de un vehículo manteniéndose a una distancia segura de él. De pronto es adelantado por otro vehículo que se ubica en el espacio que usted había dejado. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Encender y apagar sus luces en señal de advertencia.',
      },
      {
        key: 'b',
        text: 'Tratar de adelantar tan pronto pueda hacerlo en forma segura.',
      },
      {
        key: 'c',
        text: 'Disminuir su velocidad hasta recuperar una distancia segura respecto del que va adelante.',
      },
      {
        key: 'd',
        text: 'Mantener su velocidad y esperar a que el vehículo se aleje.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 228,
    text: '¿Cómo puede usted controlar mejor su vehículo al conducir con nieve?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Conduciendo en un cambio bajo y sujetando el volante muy firmemente.',
      },
      { key: 'b', text: 'Conduciendo en primera.' },
      {
        key: 'c',
        text: 'Manteniendo el motor acelerado y presionando el pedal de embrague.',
      },
      {
        key: 'd',
        text: 'Conduciendo lentamente en el cambio más alto posible.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 229,
    text: 'Al ir de noche por una carretera usted debe mantener sus focos delanteros encendidos, a menos que ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'su vehículo esté en pana en la berma.' },
      { key: 'b', text: 'vayan vehículos muy cerca delante suyo.' },
      { key: 'c', text: 'circule a menos de 50 km/hr.' },
      { key: 'd', text: 'la carretera esté iluminada.' },
    ],
    correct: ['a'],
  },
  {
    id: 230,
    text: '¿Cómo debería conducir usted en una curva cuando hay hielo en la calzada?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Usando el embrague y el freno al mismo tiempo.',
      },
      { key: 'b', text: 'Lenta y suavemente.' },
      { key: 'c', text: 'En primera.' },
      {
        key: 'd',
        text: 'Frenando a medida que va tomando la curva.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 231,
    text: 'Hay mucha neblina y el auto que viene detrás suyo parece estar muy cerca. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Encender sus luces de advertencia de peligro.',
      },
      {
        key: 'b',
        text: 'Desplazarse hacia el costado derecho y detenerse de inmediato.',
      },
      { key: 'c', text: 'Acelerar y alejarse de él.' },
      { key: 'd', text: 'Continuar con mucho cuidado.' },
    ],
    correct: ['d'],
  },
  {
    id: 232,
    text: 'Usted va conduciendo de noche por una carretera cerca de otros vehículos que van delante suyo. ¿Qué luces debería mantener encendidas?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Las neblineras delanteras.' },
      { key: 'b', text: 'Las luces altas.' },
      { key: 'c', text: 'Las luces bajas.' },
      { key: 'd', text: 'Las luces de estacionamiento.' },
    ],
    correct: ['c'],
  },
  {
    id: 233,
    text: '¿Por qué razón debería usted reducir siempre su velocidad al conducir con neblina?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Porque los frenos no funcionan bien.' },
      {
        key: 'b',
        text: 'Porque las luces neblineras de otros lo pueden encandilar.',
      },
      {
        key: 'c',
        text: 'Porque es más difícil ver lo que hay más adelante.',
      },
      { key: 'd', text: 'Porque el motor está más frío.' },
    ],
    correct: ['c'],
  },
  {
    id: 234,
    text: 'Su vehículo ha quedado en pana en medio de una autopista. ¿Qué es lo primero que usted debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Intentar detener a los autos que pasan para solicitar ayuda.',
      },
      { key: 'b', text: 'Intentar reparar su vehículo rápidamente.' },
      {
        key: 'c',
        text: 'Encender sus luces de advertencia de peligro.',
      },
      {
        key: 'd',
        text: 'Instalar un triángulo reflectante para advertir a los demás usuarios.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 235,
    text: 'Usted va circulando por la pista de la derecha de una carretera de doble calzada muy transitada. Una señal le indica que a 800 m su pista se encuentra cerrada. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta235,
    options: [
      {
        key: 'a',
        text: 'Señalizar a la izquierda, luego detenerse y esperar a que alguien le dé la pasada.',
      },
      {
        key: 'b',
        text: 'Encender sus luces de advertencia de peligro y desplazarse hacia la pista de su izquierda.',
      },
      {
        key: 'c',
        text: 'Continuar hasta llegar a la obstrucción y luego se cambia hacia la pista de la izquierda.',
      },
      {
        key: 'd',
        text: 'Desplazarse hacia la pista de su izquierda tan pronto pueda hacerlo en forma segura.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 236,
    text: 'En una calle de una pista por sentido de tránsito usted se encuentra con que su pista está obstruida. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta236,
    options: [
      { key: 'a', text: 'Continúa, porque usted tiene el derecho a vía.' },
      {
        key: 'b',
        text: 'Hace señas con la mano a quienes vienen en contra para que le den la pasada.',
      },
      {
        key: 'c',
        text: 'Cede el paso al tránsito que viene en sentido contrario.',
      },
      { key: 'd', text: 'Acelera para poder pasar primero.' },
    ],
    correct: ['c'],
  },
  {
    id: 237,
    text: 'Usted va tirando un remolque pequeño que comienza a zigzaguear. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Frena a fondo y mantiene la presión sobre el pedal de freno.',
      },
      { key: 'b', text: 'Aumenta su velocidad tan pronto sea posible.' },
      {
        key: 'c',
        text: 'Suelta ligeramente el volante y espera que el problema se corrija solo.',
      },
      {
        key: 'd',
        text: 'Retira suavemente el pie del acelerador y disminuye la velocidad.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 238,
    text: 'En relación con el transporte de una carga sobre la parrilla de un automóvil, ¿cuál de las siguientes afirmaciones constituye una obligación para el conductor?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Debe llevarse sólo cuando es estrictamente necesario.',
      },
      { key: 'b', text: 'Debe ser lo más liviana posible.' },
      { key: 'c', text: 'Debe estar cubierta con un plástico.' },
      { key: 'd', text: 'Debe estar muy bien sujeta.' },
    ],
    correct: ['d'],
  },
  {
    id: 239,
    text: '¿Cómo puede usted detener el zigzagueo de una casa rodante que va remolcando?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Moviendo el volante lentamente hacia cada lado.',
      },
      { key: 'b', text: 'Acelerando para aumentar la velocidad.' },
      { key: 'c', text: 'Disminuyendo la velocidad gradualmente.' },
      { key: 'd', text: 'Deteniéndose lo más rápido que pueda.' },
    ],
    correct: ['c'],
  },
  {
    id: 240,
    text: '¿Qué precaución debe tomar usted al cargar un remolque que va a arrastrar con su automóvil?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Que el mayor peso se concentre en la parte trasera.',
      },
      {
        key: 'b',
        text: 'Que la mayor parte del peso se concentre en la parte delantera.',
      },
      { key: 'c', text: 'Que el peso se distribuya en forma pareja.' },
      { key: 'd', text: 'Que el peso se concentre al lado derecho.' },
    ],
    correct: ['c'],
  },
  {
    id: 241,
    text: 'En una carretera de doble calzada y de mucho tránsito, usted está siendo seguido muy de cerca por un vehículo que viene atrás. ¿Qué hace usted para disminuir el riesgo de accidente?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Sale a la berma y se detiene.' },
      {
        key: 'b',
        text: 'Enciende sus luces de advertencia de peligro.',
      },
      { key: 'c', text: 'Frena.' },
      {
        key: 'd',
        text: 'Aumenta su distancia al vehículo que va adelante.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 242,
    text: 'Combine los números de las señales con los textos que correspondan.',
    instruction: 'Marque las 4 combinaciones correctas',
    type: 'multiple',
    selectCount: 4,
    image: pregunta242,
    options: [
      { key: 'a', text: 'Mantenga su derecha → 3' },
      { key: 'b', text: 'Pavimento resbaladizo → 5' },
      { key: 'c', text: 'Curva → 1' },
      { key: 'd', text: 'No adelantar → 4' },
    ],
    correct: ['a', 'b', 'c', 'd'],
  },
  {
    id: 243,
    text: 'Usted va circulando por una carretera de doble calzada con tres pistas por sentido. Las demarcaciones de pistas y de eje central están reforzadas con tachas reflectantes. Si a su izquierda las tachas son rojas y a su derecha éstas son blancas, ¿por cuál pista va usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Por la pista del medio.' },
      { key: 'b', text: 'Por la pista de la izquierda.' },
      { key: 'c', text: 'Por la pista de la derecha.' },
    ],
    correct: ['b'],
  },
  {
    id: 244,
    text: 'Al ir circulando en su vehículo usted enfrenta esta señal. ¿Qué significa?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta244,
    options: [
      {
        key: 'a',
        text: 'Que usted puede conducir hasta un 10% más rápido, porque la señal es sólo una recomendación.',
      },
      {
        key: 'b',
        text: 'Que en días no hábiles, cuando hay poco tránsito, no rige tal restricción.',
      },
      { key: 'c', text: 'Que usted no debe exceder esta velocidad.' },
      {
        key: 'd',
        text: 'Que usted debe mantener una velocidad inferior a la indicada en la señal.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 245,
    text: '¿Qué significa esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta245,
    options: [
      {
        key: 'a',
        text: 'Usted no debe exceder la velocidad indicada.',
      },
      {
        key: 'b',
        text: 'Es más seguro conducir a la velocidad indicada.',
      },
      {
        key: 'c',
        text: 'La velocidad indicada es la máxima aconsejada.',
      },
      {
        key: 'd',
        text: 'Es una recomendación para cuando hay mucho tránsito.',
      },
    ],
    correct: ['a'],
  },
]
