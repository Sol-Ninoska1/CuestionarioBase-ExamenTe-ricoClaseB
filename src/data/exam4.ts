import type { Question } from '../types'
import pregunta107 from '../assets/pregunta107.png'
import pregunta108 from '../assets/pregunta108.png'
import pregunta109 from '../assets/pregunta109.png'
import pregunta110 from '../assets/pregunta110.png'
import pregunta111 from '../assets/pregunta111.png'
import pregunta113 from '../assets/pregunta113.png'
import pregunta114 from '../assets/pregunta114.png'
import pregunta115 from '../assets/pregunta115.png'
import pregunta116 from '../assets/pregunta116.png'
import pregunta123 from '../assets/pregunta123.png'
import pregunta138 from '../assets/pregunta138.png'
import pregunta139 from '../assets/pregunta139.png'
import pregunta140 from '../assets/pregunta140.png'

export const exam4Questions: Question[] = [
  {
    id: 106,
    text: 'Usted se ha quedado detenido justo al medio de un cruce ferroviario con sistema automático de señales y barreras y no puede echar a andar el motor nuevamente. La campanilla del cruce comienza a sonar. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Correr por la vía para intentar avisar al maquinista.' },
      { key: 'b', text: 'Salir del vehículo y alejarse de él.' },
      { key: 'c', text: 'Seguir intentando reiniciar la marcha del vehículo.' },
      { key: 'd', text: 'Intentar despejar el cruce empujando su vehículo.' },
    ],
    correct: ['b'],
  },
  {
    id: 107,
    text: '¿A qué debe estar especialmente atento el conductor del vehículo indicado con la flecha?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    image: pregunta107,
    options: [
      { key: 'a', text: 'Irregularidades de la superficie de calzada.' },
      {
        key: 'b',
        text: 'Peatones que puedan aparecer sorpresivamente entre autos estacionados para cruzar.',
      },
      { key: 'c', text: 'Autos que abandonen sus lugares de estacionamiento.' },
      { key: 'd', text: 'Lugares disponibles para estacionar.' },
      { key: 'e', text: 'Puertas de automóviles estacionados que se abran.' },
      { key: 'f', text: 'Automóviles que vengan detrás de él.' },
    ],
    correct: ['b', 'c', 'e'],
  },
  {
    id: 108,
    text: '¿Qué debería hacer el conductor del auto indicado con la flecha?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta108,
    options: [
      {
        key: 'a',
        text: 'Hacer señas con la mano a los peatones que están esperando poder cruzar.',
      },
      {
        key: 'b',
        text: 'Pasar rápidamente por detrás del peatón que va cruzando la calzada.',
      },
      { key: 'c', text: 'Esperar a que pase el peatón que va por la calzada.' },
      { key: 'd', text: 'Decirle al peatón que no debería haber cruzado.' },
    ],
    correct: ['c'],
  },
  {
    id: 109,
    text: '¿Qué debería hacer el conductor del auto señalado con la flecha?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta109,
    options: [
      { key: 'a', text: 'Retroceder para salir del cruce.' },
      { key: 'b', text: 'Esperar en el mismo lugar hasta tener luz verde.' },
      { key: 'c', text: 'Esperar hasta tener luz roja.' },
      { key: 'd', text: 'Continuar con precaución.' },
    ],
    correct: ['d'],
  },
  {
    id: 110,
    text: '¿Cuál es el principal peligro cuando usted sobrepasa al bus que está detenido en la parada?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta110,
    options: [
      {
        key: 'a',
        text: 'Que usted debe ceder el paso al bus si éste se pone en marcha.',
      },
      {
        key: 'b',
        text: 'Que el auto que va adelante puede detenerse para ceder el paso a un peatón.',
      },
      {
        key: 'c',
        text: 'Que alguien puede venir corriendo al bus desde el otro lado de la calle.',
      },
      {
        key: 'd',
        text: 'Que algún pasajero que se baje del bus puede aparecer repentinamente delante del mismo para cruzar.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 111,
    text: '¿Qué significa la señal que está efectuando el camión?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta111,
    options: [
      {
        key: 'a',
        text: 'El camión va a disminuir la velocidad y va a detenerse.',
      },
      {
        key: 'b',
        text: 'El conductor del camión le está indicando a usted que lo puede adelantar.',
      },
      { key: 'c', text: 'El camión va a virar a la derecha.' },
      {
        key: 'd',
        text: 'El conductor del camión ha olvidado apagar sus luces indicadoras de viraje.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 112,
    text: '¿Qué debe hacer usted cuando va en una fila de autos?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    options: [
      {
        key: 'a',
        text: 'Debe concentrarse sólo en el vehículo que va inmediatamente delante suyo.',
      },
      {
        key: 'b',
        text: 'Debe mantener un espacio suficiente respecto del vehículo que va delante suyo, de modo de posibilitar que otro vehículo lo adelante a usted e ingrese a dicho espacio.',
      },
      {
        key: 'c',
        text: 'Debe mirar a buena distancia hacia adelante, eventualmente a través de los cristales de los otros vehículos, a fin de poder moderar la velocidad a tiempo si alguien frena.',
      },
      {
        key: 'd',
        text: 'Debe mantenerse atento a los vehículos que van tanto delante como detrás suyo.',
      },
      {
        key: 'e',
        text: 'Debe concentrarse sólo en el vehículo que va detrás suyo.',
      },
    ],
    correct: ['b', 'c', 'd'],
  },
  {
    id: 113,
    text: '¿Hacia dónde es más importante que usted mire en este momento?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta113,
    options: [
      { key: 'a', text: 'A' },
      { key: 'b', text: 'B' },
      { key: 'c', text: 'C' },
      { key: 'd', text: 'D' },
    ],
    correct: ['c'],
  },
  {
    id: 114,
    text: 'En esta situación, ¿a cuáles 3 riesgos debe estar usted principalmente atento?',
    instruction: 'Marque tres respuestas',
    type: 'multiple',
    selectCount: 3,
    image: pregunta114,
    options: [
      { key: 'a', text: 'Al ciclista que viene en sentido contrario.' },
      { key: 'b', text: 'Al tránsito en la intersección que hay más adelante.' },
      { key: 'c', text: 'A las puertas de autos que pueden ser abiertas.' },
      { key: 'd', text: 'A niños que pueden salir a la calzada por entre los autos.' },
      { key: 'e', text: 'A los vehículos que pueden venir detrás suyo.' },
      { key: 'f', text: 'A irregularidades de la superficie de calzada.' },
    ],
    correct: ['a', 'c', 'd'],
  },
  {
    id: 115,
    text: 'Usted va conduciendo a 70 km/h que es la velocidad máxima permitida en esta vía. ¿Qué hace en esta situación?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    image: pregunta115,
    options: [
      {
        key: 'a',
        text: 'Está preparado para actuar ya que alguien puede salir corriendo a la calzada.',
      },
      {
        key: 'b',
        text: 'Está preparado para actuar ya que el bus puede ponerse en marcha.',
      },
      {
        key: 'c',
        text: 'Frena y cede el paso al bus, si éste está por salir de la parada.',
      },
      {
        key: 'd',
        text: 'Sigue conduciendo sin estar preparado para nada en especial, ya que usted tiene dominio de su vehículo.',
      },
    ],
    correct: ['a', 'b'],
  },
  {
    id: 116,
    text: '¿Qué hace usted ante esta situación?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta116,
    options: [
      {
        key: 'a',
        text: 'Hace señales a los peatones para que se alejen de la calzada.',
      },
      { key: 'b', text: 'Reduce su velocidad y continúa conduciendo.' },
      {
        key: 'c',
        text: 'Hace señales de luces al vehículo que viene en contra para que espere a que usted haya pasado.',
      },
      {
        key: 'd',
        text: 'Espera y deja pasar primero al vehículo que viene en contra, y luego usted continúa y pasa a los peatones.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 117,
    text: 'Mientras va conduciendo su vehículo usted siente que lo están llamando a su teléfono celular, ¿qué hace usted para responder la llamada?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Reduce su velocidad.' },
      {
        key: 'b',
        text: 'Espera hasta encontrar un lugar seguro donde detenerse.',
      },
      { key: 'c', text: 'Conduce con una mano en el volante.' },
      { key: 'd', text: 'Es especialmente cauteloso en las intersecciones.' },
    ],
    correct: ['b'],
  },
  {
    id: 118,
    text: 'Usted debería utilizar su teléfono celular en su automóvil sólo en la siguiente situación:',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Si su vehículo tiene cambio automático.' },
      { key: 'b', text: 'Si necesita efectuar una llamada de emergencia.' },
      { key: 'c', text: 'Cuando se encuentra detenido en un lugar seguro.' },
      { key: 'd', text: 'Al circular por un camino secundario.' },
    ],
    correct: ['c'],
  },
  {
    id: 119,
    text: 'En un camino muy transitado usted desea adelantar a un camión con remolque que va lentamente delante suyo, ¿qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Mantenerse bien atrás del camión hasta que pueda ver que tiene espacio suficiente como para adelantarlo.',
      },
      {
        key: 'b',
        text: 'Esperar atrás del camión hasta que su conductor le indique que puede adelantarlo.',
      },
      {
        key: 'c',
        text: 'Encender y apagar sus luces para que quienes vienen en contra le faciliten el adelantamiento.',
      },
      {
        key: 'd',
        text: 'Seguir muy de cerca al camión desplazándose permanentemente hacia el centro de la calzada para poder ver hacia adelante.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 120,
    text: 'La mayor parte de los accidentes de tránsito se produce en:',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Carreteras' },
      { key: 'b', text: 'Salidas de colegios' },
      { key: 'c', text: 'Caminos rurales' },
      { key: 'd', text: 'Intersecciones' },
    ],
    correct: ['d'],
  },
  {
    id: 121,
    text: 'Entre los accidentes de tránsito se distinguen distintos tipos de éstos. En Chile, ¿cuál es el tipo de accidente que origina la mayor cantidad de muertos?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Los choques contra obstáculos fijos.' },
      { key: 'b', text: 'Las colisiones entre 2 o más vehículos.' },
      { key: 'c', text: 'Los atropellos.' },
      { key: 'd', text: 'Los volcamientos.' },
    ],
    correct: ['c'],
  },
  {
    id: 122,
    text: 'Al estar estacionado, ¿qué debería hacer usted justo antes de poner su vehículo en movimiento?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Ajustar sus espejos.' },
      { key: 'b', text: 'Seleccionar primera marcha.' },
      {
        key: 'c',
        text: 'Mirar a su alrededor y chequear sus puntos ciegos.',
      },
      { key: 'd', text: 'Señalizar.' },
    ],
    correct: ['c'],
  },
  {
    id: 123,
    text: 'Las fotografías muestran una secuencia cronológica de imágenes. ¿Cuáles son las 2 principales causas por las que surge esta situación de peligro?',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    image: pregunta123,
    options: [
      { key: 'a', text: 'Por adelantar en un lugar prohibido.' },
      { key: 'b', text: 'Por mala visibilidad.' },
      {
        key: 'c',
        text: 'Porque el vehículo adelantado no anda lo suficientemente a la derecha.',
      },
      {
        key: 'd',
        text: 'Porque el conductor del auto que llega a la carretera por la izquierda ingresa a ésta cuando no debió haberlo hecho.',
      },
    ],
    correct: ['a', 'd'],
  },
  {
    id: 124,
    text: 'Usted llega a una intersección regulada por semáforo que se encuentra en rojo y, al mismo tiempo, un Carabinero le indica que avance, ¿qué debe hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Detenerse, porque la luz roja se lo está indicando.' },
      {
        key: 'b',
        text: 'Avanzar, porque las instrucciones de un Carabinero prevalecen sobre las señales del tránsito.',
      },
      {
        key: 'c',
        text: 'Avanzar, sólo si detrás suyo no vienen otros vehículos.',
      },
      {
        key: 'd',
        text: 'Avanzar, sólo si está seguro que la luz roja está próxima a cambiar.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 125,
    text: '¿En qué situación puede usted hacer uso de la bocina de su vehículo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Cuando cede a otro el derecho a vía.' },
      { key: 'b', text: 'Cuando saluda a otros usuarios de la vía.' },
      {
        key: 'c',
        text: 'Cuando trata de prevenir a otros acerca de un peligro.',
      },
      { key: 'd', text: 'Cuando desea manifestar su disgusto.' },
    ],
    correct: ['c'],
  },
  {
    id: 126,
    text: '¿Cuándo puede usted hacer sonar la bocina de su auto?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Para llamar la atención de un amigo.' },
      { key: 'b', text: 'Para que le cedan el paso.' },
      { key: 'c', text: 'Para apurar a un conductor que va más lento.' },
      { key: 'd', text: 'Para prevenir la ocurrencia de un accidente.' },
    ],
    correct: ['d'],
  },
  {
    id: 127,
    text: 'Usted se va acercando a un cruce semaforizado. ¿Cuándo no debe usted ingresar al cruce aunque el semáforo esté en verde?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Cuando hay peatones esperando para cruzar.' },
      {
        key: 'b',
        text: 'Cuando pasado el cruce su pista no esté lo suficientemente despejada.',
      },
      { key: 'c', text: 'Cuando usted cree que la luz está próxima a cambiar.' },
      { key: 'd', text: 'Cuando usted va a virar a la derecha.' },
    ],
    correct: ['b'],
  },
  {
    id: 128,
    text: 'Fuera de la ciudad, usted va por una carretera de doble calzada con dos pistas por sentido. La velocidad máxima permitida es de 100 km/hr. Si usted va a 90 km/hr y no van vehículos delante suyo, ¿por cuál pista circula usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Por la pista de la izquierda.' },
      { key: 'b', text: 'Por la pista de la derecha.' },
      { key: 'c', text: 'Por cualquiera de las dos pistas.' },
    ],
    correct: ['b'],
  },
  {
    id: 129,
    text: 'En una carretera de doble calzada con dos pistas por sentido, ¿en cuáles 2 de las siguientes situaciones usted usaría la pista izquierda?',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    options: [
      { key: 'a', text: 'Cuando va a virar a la izquierda.' },
      { key: 'b', text: 'Al pasar a otro vehículo que va más lento.' },
      { key: 'c', text: 'Al circular normalmente.' },
      { key: 'd', text: 'Al conducir a una velocidad muy baja.' },
    ],
    correct: ['a', 'b'],
  },
  {
    id: 130,
    text: '¿En qué situación retrocede usted con su vehículo en un cruce?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Si no hay nadie detrás suyo.' },
      { key: 'b', text: 'En ningún momento.' },
      {
        key: 'c',
        text: 'Sólo si ha quedado detenido sobre el paso de peatones.',
      },
      {
        key: 'd',
        text: 'Sólo si recibe indicación expresa de un Carabinero.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 131,
    text: 'Usted se aproxima a un cruce de calles no señalizado. Por la otra calle también se aproxima un vehículo que pretende pasar el cruce. ¿Quién tiene la prioridad para pasar?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'El vehículo más grande.' },
      { key: 'b', text: 'El vehículo que vaya a mayor velocidad.' },
      {
        key: 'c',
        text: 'El otro vehículo, siempre que él se venga acercando al cruce por el lado derecho suyo.',
      },
      {
        key: 'd',
        text: 'El otro vehículo, siempre que él se venga acercando al cruce por el lado izquierdo suyo.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 132,
    text: 'Cuando dos vehículos van a cruzarse en una intersección en la que no hay señalización alguna, ¿quién debe ceder el paso?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'El vehículo más pequeño.' },
      {
        key: 'b',
        text: 'El vehículo que va por la calle de pistas más angostas.',
      },
      { key: 'c', text: 'El que se acerca al cruce por la derecha del otro.' },
      {
        key: 'd',
        text: 'El que se acerca al cruce por la izquierda del otro.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 133,
    text: '¿Es seguro permitir que los niños viajen en un vehículo de 3 o 5 puertas en el espacio que queda detrás de los asientos traseros?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'No, en ninguna circunstancia.' },
      {
        key: 'b',
        text: 'Sí, siempre que usted pueda ver sin problemas hacia atrás.',
      },
      { key: 'c', text: 'Sí, si son menores de 10 años.' },
      {
        key: 'd',
        text: 'No, a menos que los demás asientos estén ocupados.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 134,
    text: '¿Cuáles son las 2 formas más seguras para transportar una guagua en su automóvil?',
    instruction: 'Esta pregunta se elimina, manteniendo las siguientes preguntas con su numeración original.',
    type: 'multiple',
    selectCount: 2,
    eliminated: true,
    options: [],
    correct: [],
  },
  {
    id: 135,
    text: '¿Cuál es la forma más segura para llevar a un niño de 3 ó 4 años en su vehículo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'En la falda de un adulto compartiendo un mismo cinturón de seguridad.',
      },
      {
        key: 'b',
        text: 'En la falda de un adulto que va con su cinturón de seguridad.',
      },
      {
        key: 'c',
        text: 'En cualquier asiento, siempre que lleve puesto el cinturón de seguridad para adultos.',
      },
      { key: 'd', text: 'En el asiento trasero, en una silla de seguridad.' },
    ],
    correct: ['d'],
  },
  {
    id: 136,
    text: 'La forma más segura de viajar en un automóvil para un niño menor de 2 años es:',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'En brazos de un adulto.' },
      {
        key: 'b',
        text: 'Solo en el asiento delantero y con cinturón de seguridad.',
      },
      {
        key: 'c',
        text: 'Solo en el asiento trasero y con cinturón de seguridad.',
      },
      { key: 'd', text: 'En un asiento de seguridad mirando hacia atrás.' },
    ],
    correct: ['d'],
  },
  {
    id: 137,
    text: 'En un vehículo de 3 o 5 puertas, ¿en qué condiciones sería seguro transportar niños pequeños en el espacio que queda detrás de los asientos traseros?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Al efectuar un viaje corto dentro de la ciudad.' },
      { key: 'b', text: 'Al circular por calles o caminos de poco tránsito.' },
      { key: 'c', text: 'Nunca.' },
      { key: 'd', text: 'Siempre es seguro.' },
    ],
    correct: ['c'],
  },
  {
    id: 138,
    text: 'Usted está en una calle de un solo sentido de tránsito y desea virar a la izquierda. ¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s)?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    image: pregunta138,
    options: [
      { key: 'a', text: 'Usted está bien situado para virar a la izquierda.' },
      {
        key: 'b',
        text: 'Si después de virar usted volverá a virar nuevamente a la izquierda en el siguiente cruce, lo mejor es que se mantenga en la pista izquierda de la calle hacia la cual está virando.',
      },
      {
        key: 'c',
        text: 'Usted nunca puede saber si la calle hacia la cual vira tiene un solo sentido de tránsito o dos. Por eso, siempre debe tomar la pista derecha de la calle hacia la cual vira.',
      },
      { key: 'd', text: 'No es necesario que usted señalice que va a virar.' },
    ],
    correct: ['a', 'b'],
  },
  {
    id: 139,
    text: '¿En cuál o cuáles de las siguientes situaciones puede usted virar a la izquierda sin que siempre deba detenerse antes?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    image: pregunta139,
    options: [
      { key: 'a', text: 'Semáforo en verde.' },
      { key: 'b', text: 'Semáforo con flecha verde a la izquierda.' },
      { key: 'c', text: 'Señal PARE.' },
      { key: 'd', text: 'Señal CEDA EL PASO.' },
    ],
    correct: ['a', 'b', 'd'],
  },
  {
    id: 140,
    text: '¿Frente a cuál o cuáles de las siguientes señales e indicaciones del semáforo debe usted detenerse siempre?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    image: pregunta140,
    options: [
      { key: 'a', text: 'Semáforo en verde.' },
      { key: 'b', text: 'Semáforo en rojo intermitente.' },
      { key: 'c', text: 'Señal CEDA EL PASO.' },
      { key: 'd', text: 'Señal PARE.' },
    ],
    correct: ['b', 'd'],
  },
]
