import type { Question } from '../types'
import pregunta91 from '../assets/pregunta91.png'
import pregunta92 from '../assets/pregunta92.png'
import pregunta94 from '../assets/pregunta94.png'
import pregunta99 from '../assets/pregunta99.png'
import pregunta101 from '../assets/pregunta101.png'
import pregunta105 from '../assets/pregunta105.png'

export const exam3Questions: Question[] = [
  {
    id: 71,
    text: 'En relación con la técnica de observación de los conductores inexpertos, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Los conductores inexpertos concentran su mirada en puntos fijos.' },
      { key: 'b', text: 'Los conductores inexpertos aprovechan al máximo su visión periférica.' },
      {
        key: 'c',
        text: 'Los conductores inexpertos observan el entorno que los rodea en forma más sistemática que los conductores experimentados.',
      },
      {
        key: 'd',
        text: 'No hay mayores diferencias en cuanto a cómo observan el entorno los conductores inexpertos y los con gran experiencia.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 72,
    text: 'De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'El tener una buena visión es imprescindible para poder captar las diversas situaciones que se presentan al conducir.',
      },
      {
        key: 'b',
        text: 'Existe un alto riesgo de que los conductores cuyo campo visual no es lo suficientemente amplio, no alcancen a reaccionar a tiempo ante peligros provenientes de los lados.',
      },
      {
        key: 'c',
        text: 'Si usted conduce durante un largo tiempo en condiciones difíciles, puede tener problemas para apreciar correctamente lo que ve y, por lo tanto, tomar decisiones equivocadas.',
      },
      {
        key: 'd',
        text: 'Las personas jóvenes son más sensibles a la luz deslumbrante que los mayores.',
      },
    ],
    correct: ['a', 'b', 'c'],
  },
  {
    id: 73,
    text: '¿Cuándo es alto el riesgo de interpretar erróneamente la realidad al conducir?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Cuando va por un camino montañoso y con muchas sinuosidades, y la visibilidad es muy mala.',
      },
      {
        key: 'b',
        text: 'Cuando usted está muy cansado, especialmente si conduce de noche.',
      },
      { key: 'c', text: 'Cuando va por carretera y existe una densa niebla.' },
      {
        key: 'd',
        text: 'Cuando con buenas condiciones de visibilidad usted conduce por una carretera con buenas demarcaciones viales.',
      },
    ],
    correct: ['a', 'b', 'c'],
  },
  {
    id: 74,
    text: '¿Qué debería hacer usted si está tomando un remedio para la tos y no está seguro si éste puede afectar su conducción?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'No conducir tan pronto haya ingerido el remedio, sino que esperar un rato.',
      },
      { key: 'b', text: 'Conducir siempre que se sienta bien.' },
      { key: 'c', text: 'Preguntar a su doctor.' },
      { key: 'd', text: 'Solicitar consejo a un amigo o pariente.' },
    ],
    correct: ['c'],
  },
  {
    id: 75,
    text: 'Usted está tomando unos remedios que probablemente afectarán su conducción. ¿Qué debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Limitar su conducción sólo a viajes esenciales.' },
      {
        key: 'b',
        text: 'Conducir solamente acompañado por alguien que posea una licencia de conducir.',
      },
      { key: 'c', text: 'Conducir sólo distancias cortas.' },
      { key: 'd', text: 'Solicitar consejo médico antes de conducir.' },
    ],
    correct: ['d'],
  },
  {
    id: 76,
    text: 'Su doctor le ha recetado un tratamiento. ¿Por qué usted debe consultarle si puede conducir o no?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Porque algunas medicinas pueden hacer que sus reacciones sean más lentas.',
      },
      {
        key: 'b',
        text: 'Porque las drogas influyen en su conducción al hacer más rápidas sus reacciones.',
      },
      {
        key: 'c',
        text: 'Porque en caso de accidente no estaría cubierto por el Seguro Obligatorio.',
      },
      {
        key: 'd',
        text: 'Porque las medicinas que está tomando pueden afectar su visión.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 77,
    text: 'Si usted ha ingerido alcohol, ¿cuál o cuáles son los efectos más probables?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Su capacidad de coordinación se reducirá.' },
      { key: 'b', text: 'Su autoconfianza se incrementará.' },
      { key: 'c', text: 'Presentará ceguera al color.' },
      { key: 'd', text: 'Sus reacciones serán más rápidas.' },
      { key: 'e', text: 'Su juicio empeorará.' },
      { key: 'f', text: 'Su capacidad de concentración aumentará.' },
    ],
    correct: ['a', 'b', 'e'],
  },
  {
    id: 78,
    text: '¿Cómo afecta el consumo de alcohol a su conducción?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Acelera sus reacciones.' },
      { key: 'b', text: 'Aumenta su lucidez.' },
      { key: 'c', text: 'Mejora su coordinación.' },
      { key: 'd', text: 'Reduce su concentración.' },
    ],
    correct: ['d'],
  },
  {
    id: 79,
    text: 'Si usted va conduciendo y comienza a sentir cansancio, es mejor que se detenga lo antes posible. ¿Qué debería hacer usted mientras no pueda detenerse?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Aumentar su velocidad para encontrar pronto un lugar donde detenerse.',
      },
      { key: 'b', text: 'Golpear suave y repetidamente el manubrio.' },
      {
        key: 'c',
        text: 'Asegurarse de que entre aire fresco a su vehículo.',
      },
      {
        key: 'd',
        text: 'Modificar permanentemente la velocidad para mejorar la concentración.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 80,
    text: '¿Qué consejo daría usted a un conductor que ha ingerido bebidas alcohólicas en una fiesta?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Que se vuelva a casa en taxi.' },
      {
        key: 'b',
        text: 'Que tome una taza de café cargado y luego conduzca a casa.',
      },
      {
        key: 'c',
        text: 'Que se vuelva a casa conduciendo lenta y muy cuidadosamente.',
      },
      {
        key: 'd',
        text: 'Que espere un rato antes de irse conduciendo a casa.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 81,
    text: 'Un conductor hace algo que a usted le molesta. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Hacerle saber cómo se siente.' },
      {
        key: 'b',
        text: 'Encender y apagar sus luces delanteras repetidamente.',
      },
      { key: 'c', text: 'Tratar de no reaccionar.' },
      { key: 'd', text: 'Tocar la bocina.' },
    ],
    correct: ['c'],
  },
  {
    id: 82,
    text: 'Usted está a punto de volver a casa conduciendo, pero no puede encontrar los anteojos que necesita usar para conducir. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Conducir a casa lentamente por calles tranquilas.' },
      { key: 'b', text: 'Encontrar una forma de llegar a casa sin manejar.' },
      {
        key: 'c',
        text: 'Pedir prestados los anteojos a un amigo para volver conduciendo a casa.',
      },
      {
        key: 'd',
        text: 'Manejar hasta su casa de noche para que las luces lo ayuden.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 83,
    text: 'Usted está a punto de conducir, pero se siente enfermo. Usted debería ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'tomar una medicina antes de conducir.' },
      { key: 'b', text: 'acortar el viaje si puede.' },
      { key: 'c', text: 'no manejar.' },
      {
        key: 'd',
        text: 'prometerse a sí mismo que se va a acostar tan pronto haya llegado a casa.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 84,
    text: 'En relación con el cansancio y la conducción, de las siguientes afirmaciones, ¿cuál es falsa?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'El cansancio es una causa importante de los accidentes que se registran en carreteras.',
      },
      {
        key: 'b',
        text: 'Un conductor cansado ve empeorada su capacidad de reacción.',
      },
      {
        key: 'c',
        text: 'Si un conductor está cansado, lo mejor es que su acompañante le vaya hablando permanentemente.',
      },
      {
        key: 'd',
        text: 'El desorientarse y plantearse preguntas tales como, ¿pasé ya la ciudad X o aún no?, es un síntoma de cansancio.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 85,
    text: 'Usted comienza a sentir cansancio en un viaje. ¿Qué debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Detenerse y comer una gran comida.' },
      { key: 'b', text: 'Detenerse inmediatamente y respirar profundo.' },
      { key: 'c', text: 'Terminar el viaje y después dormir.' },
      {
        key: 'd',
        text: 'Detenerse y dormir una pequeña siesta o detenerse y tomar un poco de café.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 86,
    text: '¿Qué precauciones debe tomar un conductor cuando asiste a un evento social?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Beber bastante café después de ingerir bebidas alcohólicas.',
      },
      {
        key: 'b',
        text: 'Evitar circular por calles de mucho tráfico después de beber alcohol.',
      },
      { key: 'c', text: 'Evitar beber alcohol con el estómago vacío.' },
      { key: 'd', text: 'Evitar consumir alcohol.' },
    ],
    correct: ['d'],
  },
  {
    id: 87,
    text: 'De los siguientes efectos, ¿cuál no es consecuencia del consumo de alcohol antes de conducir?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Falsa sensación de confianza.' },
      { key: 'b', text: 'Mayor conciencia del peligro.' },
      { key: 'c', text: 'Menor control del vehículo.' },
      { key: 'd', text: 'Escaso juicio de la velocidad.' },
    ],
    correct: ['b'],
  },
  {
    id: 88,
    text: 'De las siguientes capacidades de un individuo, ¿cuál de ellas no se ve afectada por el consumo de alcohol?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'La percepción de colores.' },
      { key: 'b', text: 'El juicio acerca de la velocidad.' },
      { key: 'c', text: 'Los tiempos de reacción.' },
      { key: 'd', text: 'La coordinación.' },
    ],
    correct: ['a'],
  },
  {
    id: 89,
    text: 'El tiempo que transcurre desde que usted percibe un peligro hasta que actúa se denomina tiempo de reacción. En una emergencia, ¿qué factor influye en su tiempo de reacción?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Su estado de salud.' },
      { key: 'b', text: 'El estado de la calzada.' },
      { key: 'c', text: 'La velocidad de su vehículo.' },
      { key: 'd', text: 'Las condiciones climáticas.' },
    ],
    correct: ['a'],
  },
  {
    id: 90,
    text: '¿Cuándo es más probable que usted pierda concentración cuando conduce?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      { key: 'a', text: 'Cuando hace funcionar los limpiaparabrisas.' },
      { key: 'b', text: 'Cuando mira a través del espejo retrovisor.' },
      { key: 'c', text: 'Cuando va escuchando música a alto volumen.' },
      { key: 'd', text: 'Cuando utiliza un teléfono celular.' },
      { key: 'e', text: 'Cuando mira un mapa del camino.' },
    ],
    correct: ['c', 'd', 'e'],
  },
  {
    id: 91,
    text: '¿Qué debería hacer el conductor del auto señalado con la flecha?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta91,
    options: [
      { key: 'a', text: 'Detenerse y esperar a que el peatón cruce.' },
      {
        key: 'b',
        text: 'Señalizar con la mano al peatón para que retroceda.',
      },
      { key: 'c', text: 'Continuar conduciendo lentamente.' },
      {
        key: 'd',
        text: 'Detenerse, pero sólo si vienen más autos detrás suyo.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 92,
    text: '¿Cuáles son las 2 principales razones por las que no sería adecuado que usted adelantara al peatón en este momento?',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    image: pregunta92,
    options: [
      { key: 'a', text: 'Podría ensuciar al peatón.' },
      {
        key: 'b',
        text: 'La calzada es angosta y el peatón podría desviarse inesperadamente hacia la derecha.',
      },
      { key: 'c', text: 'El vehículo de la izquierda podría avanzar.' },
      {
        key: 'd',
        text: 'Podría aparecer sorpresivamente algún vehículo en sentido contrario.',
      },
    ],
    correct: ['c', 'd'],
  },
  {
    id: 93,
    text: 'En relación con los cruces ferroviarios a nivel, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Extrañamente, está permitido estacionar a 10 m de un cruce ferroviario a nivel.',
      },
      {
        key: 'b',
        text: 'Si ya ha ingresado a un cruce ferroviario y siente que se aproxima un tren a lo lejos, lo mejor es continuar.',
      },
      {
        key: 'c',
        text: 'Si va con la radio de su vehículo encendida, es conveniente apagarla cuando se aproxima a un cruce ferroviario.',
      },
      {
        key: 'd',
        text: 'Nada impide que pueda efectuar un adelantamiento en un cruce ferroviario, si no siente tren alguno en las proximidades.',
      },
    ],
    correct: ['b', 'c'],
  },
  {
    id: 94,
    text: 'En esta ocasión usted va conduciendo a 70 km/h. ¿Qué hace usted?',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    image: pregunta94,
    options: [
      { key: 'a', text: 'Frena en seco.' },
      { key: 'b', text: 'Se desplaza hacia la izquierda.' },
      { key: 'c', text: 'Continúa derecho.' },
      { key: 'd', text: 'Frena suavemente.' },
    ],
    correct: ['c', 'd'],
  },
  {
    id: 95,
    text: 'Al aproximarse a una curva hacia la izquierda usted debería mantenerse bien a la derecha. ¿Por qué?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Para superar el efecto de pendiente de la calzada.' },
      { key: 'b', text: 'Para tener una mejor visual sobre el camino.' },
      {
        key: 'c',
        text: 'Para permitirle el adelantamiento a quienes vienen rápido detrás suyo.',
      },
      {
        key: 'd',
        text: 'Para estar en una ubicación más segura en caso que el vehículo se roncee.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 96,
    text: 'Usted conduce por una vía rápida en muy buenas condiciones. Por seguridad, ¿qué distancia debería mantener usted respecto del vehículo que va delante suyo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Un espacio equivalente al que usted recorre en 3 segundos.',
      },
      { key: 'b', text: 'Un espacio igual al largo de un auto.' },
      { key: 'c', text: '3 metros.' },
      { key: 'd', text: 'Un espacio igual al largo de 3 autos.' },
    ],
    correct: ['a'],
  },
  {
    id: 97,
    text: 'Usted se aproxima a una curva hacia la izquierda. ¿Qué debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Mantenerse bien a la derecha ya que así tardará menos en pasar la curva.',
      },
      {
        key: 'b',
        text: 'Mantenerse bien a la derecha para tener una mejor visual sobre la curva.',
      },
      {
        key: 'c',
        text: 'Mantenerse bien a la izquierda para evitar cualquier obstáculo que pueda haber en la cuneta.',
      },
      {
        key: 'd',
        text: 'Mantenerse bien a la izquierda para hacer la curva menos pronunciada.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 98,
    text: 'Usted conduce a 90 km/h. En condiciones normales, ¿cuál es la distancia mínima de seguridad que usted debería mantener respecto del vehículo que va adelante?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Unos 75 metros' },
      { key: 'b', text: 'Unos 15 metros' },
      { key: 'c', text: 'Unos 20 metros' },
      { key: 'd', text: 'Unos 100 metros' },
    ],
    correct: ['a'],
  },
  {
    id: 99,
    text: 'Mire el dibujo. ¿Cuál es el peligro al que usted debe estar más atento(a)?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta99,
    options: [
      { key: 'a', text: 'El niño puede cruzar corriendo.' },
      {
        key: 'b',
        text: 'El vendedor de helados puede poner su vehículo en movimiento.',
      },
      { key: 'c', text: 'El auto estacionado puede ponerse en movimiento.' },
      {
        key: 'd',
        text: 'El vendedor de helados puede bajarse de su vehículo.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 100,
    text: 'Usted pretende doblar hacia la izquierda en un cruce, pero hay vehículos estacionados que le obstruyen la visual. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Avanzar rápidamente, pero estando preparado para detenerse.',
      },
      { key: 'b', text: 'Tocar la bocina y avanzar lentamente.' },
      {
        key: 'c',
        text: 'Detenerse, luego avanzar lentamente hasta que tenga una visual plena.',
      },
      { key: 'd', text: 'Tocar la bocina y avanzar rápidamente.' },
    ],
    correct: ['c'],
  },
  {
    id: 101,
    text: 'Usted va conduciendo al lado de una fila de autos estacionados. De pronto ve una pelota rebotando en la calzada un poco más adelante. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta101,
    options: [
      {
        key: 'a',
        text: 'Continuar a la misma velocidad, tocando la bocina.',
      },
      {
        key: 'b',
        text: 'Continuar a la misma velocidad, pero encendiendo y apagando sus luces delanteras.',
      },
      {
        key: 'c',
        text: 'Detenerse y señalar con la mano para que los niños crucen a recoger la pelota.',
      },
      {
        key: 'd',
        text: 'Disminuir la velocidad y estar preparado para detenerse si aparece un niño.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 102,
    text: 'Al adelantar a animales que van por el camino, usted no debería...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'acelerar el motor o tocar la bocina.' },
      { key: 'b', text: 'cambiar a una marcha más baja.' },
      { key: 'c', text: 'usar los señalizadores de viraje.' },
      { key: 'd', text: 'tener las luces encendidas.' },
    ],
    correct: ['a'],
  },
  {
    id: 103,
    text: 'Al adelantar en un camino a una manada de ovejas, ¿qué hace usted?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    options: [
      { key: 'a', text: 'Deja un espacio lateral suficiente.' },
      { key: 'b', text: 'Adelanta rápidamente y sin vacilaciones.' },
      { key: 'c', text: 'Conduce lentamente.' },
      { key: 'd', text: 'Toca la bocina levemente.' },
      { key: 'e', text: 'Está preparado para detenerse.' },
    ],
    correct: ['a', 'c', 'e'],
  },
  {
    id: 104,
    text: 'Usted va conduciendo por una calle de dos pistas y de doble sentido de tránsito en la cual hay vehículos estacionados al costado derecho. ¿Por cuáles 3 razones usted debe disminuir su velocidad?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    options: [
      { key: 'a', text: 'Pueden salir vehículos de su estacionamiento.' },
      {
        key: 'b',
        text: 'Alguien puede abrir una puerta de un auto estacionado.',
      },
      { key: 'c', text: 'Puede activar las alarmas de los automóviles.' },
      {
        key: 'd',
        text: 'Para poder ser visto con mayor claridad por el tránsito que viene en contra.',
      },
      {
        key: 'e',
        text: 'Entre los autos estacionados puede aparecer un niño corriendo.',
      },
    ],
    correct: ['a', 'b', 'e'],
  },
  {
    id: 105,
    text: 'Usted está esperando en un cruce en T. El vehículo azul que se acerca desde la izquierda señaliza a la derecha. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta105,
    options: [
      { key: 'a', text: 'Avanzar acelerando a fondo.' },
      {
        key: 'b',
        text: 'Ponerse en marcha antes de que el vehículo azul llegue al cruce.',
      },
      {
        key: 'c',
        text: 'Esperar hasta que el vehículo azul haya comenzado a virar.',
      },
      { key: 'd', text: 'Avanzar lentamente.' },
    ],
    correct: ['c'],
  },
]
