import type { Question } from '../types'
import pregunta176 from '../assets/pregunta176.png'
import pregunta186 from '../assets/pregunta186.png'
import pregunta191 from '../assets/pregunta191.png'
import pregunta192 from '../assets/pregunta192.png'
import pregunta205 from '../assets/pregunta205.png'

export const exam6Questions: Question[] = [
  {
    id: 176,
    text: 'Un bus está detenido en una parada delante suyo. El intermitente izquierdo del bus está parpadeando. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta176,
    options: [
      {
        key: 'a',
        text: 'Hace parpadear sus luces delanteras y disminuye la velocidad.',
      },
      { key: 'b', text: 'Toca la bocina y continúa.' },
      { key: 'c', text: 'Disminuye la velocidad y luego toca la bocina.' },
      {
        key: 'd',
        text: 'Disminuye la velocidad y cede el paso al bus, siempre que ello sea seguro.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 177,
    text: 'Usted va conduciendo en una carretera a la velocidad máxima permitida. El conductor que viene detrás suyo está tratando de adelantarlo. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Se acerca más al vehículo de adelante para que el conductor que viene atrás no tenga espacio suficiente para el adelantamiento.',
      },
      {
        key: 'b',
        text: 'Le hace señas al conductor de atrás para que lo adelante, cuando sea seguro hacerlo.',
      },
      { key: 'c', text: 'Acelera para alejarse del conductor de atrás.' },
      {
        key: 'd',
        text: 'Mantiene o disminuye la velocidad y permite el adelantamiento.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 178,
    text: 'Usted se está aproximando a un cruce cuando sorpresivamente un vehículo ingresa a la vía por la que usted va y se ubica delante suyo. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Lo esquiva y toca la bocina.' },
      {
        key: 'b',
        text: 'Disminuye la velocidad y está atento para detenerse.',
      },
      {
        key: 'c',
        text: 'Enciende y apaga sus luces delanteras y continúa muy cerca detrás de él.',
      },
      { key: 'd', text: 'Acelera pasándolo inmediatamente.' },
    ],
    correct: ['b'],
  },
  {
    id: 179,
    text: 'Usted va conduciendo a la velocidad máxima permitida. Un vehículo se acerca muy rápido por atrás encendiendo y apagando sus luces. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Acelera para mantener un espacio adecuado detrás suyo.',
      },
      {
        key: 'b',
        text: 'Presiona su freno para mostrarle sus luces de freno.',
      },
      { key: 'c', text: 'Le permite el adelantamiento.' },
      {
        key: 'd',
        text: 'Aumenta su velocidad y le impide que lo adelante.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 180,
    text: 'Un espacio entre usted y el vehículo que marcha delante igual a lo que usted recorre en tres segundos es suficiente cuando ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'las condiciones climáticas son buenas.' },
      { key: 'b', text: 'está lloviendo fuertemente.' },
      { key: 'c', text: 'recién ha cesado de llover.' },
      { key: 'd', text: 'hay neblina.' },
    ],
    correct: ['a'],
  },
  {
    id: 181,
    text: 'Usted está conduciendo al límite de la velocidad máxima permitida y un conductor intenta adelantarlo. ¿Trataría usted de evitar que lo adelante?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'No, a menos que sea seguro hacerlo.' },
      {
        key: 'b',
        text: 'Sí, porque el otro conductor está actuando en forma peligrosa.',
      },
      {
        key: 'c',
        text: 'Sí, porque el otro conductor está infringiendo la ley.',
      },
      { key: 'd', text: 'No, en ningún momento.' },
    ],
    correct: ['d'],
  },
  {
    id: 182,
    text: 'De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en las colisiones por la parte trasera?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'El conducir demasiado cerca del vehículo que va adelante.',
      },
      { key: 'b', text: 'El cambio repentino de las luces de los semáforos.' },
      {
        key: 'c',
        text: 'La existencia de peatones que cruzan en áreas muy concurridas.',
      },
      { key: 'd', text: 'El detenerse en todos los cruces.' },
    ],
    correct: ['a'],
  },
  {
    id: 183,
    text: 'Usted está esperando poder incorporarse a una vía principal desde una calle lateral. ¿Por qué razón debería usted poner especial atención a las motocicletas?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Porque generalmente las motocicletas circulan más rápido que los autos.',
      },
      {
        key: 'b',
        text: 'Porque las patrullas de Carabineros suelen andar en motocicletas.',
      },
      {
        key: 'c',
        text: 'Porque las motocicletas son pequeñas y difíciles de ver.',
      },
      {
        key: 'd',
        text: 'Porque las motocicletas tienen el derecho preferente de paso.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 184,
    text: '¿Cuál de los siguientes grupos de conductores tiene mayores probabilidades de verse involucrado en un accidente de tránsito?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Los que tienen menos de 25 años.' },
      { key: 'b', text: 'Los que tienen entre 36 y 45 años.' },
      { key: 'c', text: 'Los que tienen entre 46 y 55 años.' },
      { key: 'd', text: 'Los que tienen más de 55 años.' },
    ],
    correct: ['a'],
  },
  {
    id: 185,
    text: 'En una zona rural, usted va conduciendo por un camino muy angosto. ¿Dónde le resultaría más difícil ver personas a caballo que avanzan delante suyo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Al ir usted bajando un cerro.' },
      { key: 'b', text: 'Al ir ellas subiendo un cerro.' },
      { key: 'c', text: 'Al ir usted en una curva a la izquierda.' },
      { key: 'd', text: 'Al ir usted en una curva a la derecha.' },
    ],
    correct: ['d'],
  },
  {
    id: 186,
    text: 'Usted va detrás de un camión articulado que se aproxima a un cruce. Su conductor señaliza hacia la derecha pero el vehículo se desplaza hacia la izquierda. ¿Qué debe hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta186,
    options: [
      {
        key: 'a',
        text: 'Advertirle al conductor acerca de su señal equivocada.',
      },
      { key: 'b', text: 'Esperar detrás del camión.' },
      { key: 'c', text: 'Denunciar a Carabineros al conductor.' },
      { key: 'd', text: 'Pasar al camión por la derecha.' },
    ],
    correct: ['b'],
  },
  {
    id: 187,
    text: 'En una carretera de doble calzada con 2 pistas por sentido de tránsito, usted desea pasar al vehículo que va delante suyo. Por su espejo retrovisor ve que el auto que viene atrás se está cambiando de pista para sobrepasarlo a usted. ¿Qué debería hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Señalizar y luego cambiar de pista para sobrepasar.',
      },
      {
        key: 'b',
        text: 'Señalizar para indicarle al conductor que viene atrás que usted también desea sobrepasar.',
      },
      {
        key: 'c',
        text: 'Presionar levemente el pedal de frenos para mostrar sus luces de freno.',
      },
      { key: 'd', text: 'No señalizar hasta que el auto lo haya pasado.' },
    ],
    correct: ['d'],
  },
  {
    id: 188,
    text: 'Un vehículo emerge sorpresivamente desde una vía lateral situándose delante suyo y obligándolo a frenar fuertemente. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Enciende y apaga sus luces para manifestarle su enojo.',
      },
      { key: 'b', text: 'Ignora el error y permanece calmado.' },
      { key: 'c', text: 'Toca la bocina para demostrar su enojo.' },
      {
        key: 'd',
        text: 'Lo adelanta dejándolo atrás lo antes posible.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 189,
    text: 'Usted se detiene ante un cruce cebra. En la vereda hay peatones esperando, pero ellos no comienzan a cruzar. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Les toca la bocina para apurarlos.' },
      { key: 'b', text: 'Tiene paciencia y espera.' },
      { key: 'c', text: 'Prosigue su marcha.' },
      {
        key: 'd',
        text: 'Les hace señas con la mano apurándolos para que crucen.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 190,
    text: 'Cuando el viento sopla muy fuertemente usted necesita tener especial cuidado ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'al usar los frenos.' },
      { key: 'b', text: 'al comenzar a subir una pendiente.' },
      { key: 'c', text: 'al virar hacia un camino angosto.' },
      { key: 'd', text: 'al pasar cerca de ciclistas.' },
    ],
    correct: ['d'],
  },
  {
    id: 191,
    text: 'En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué debe hacer usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta191,
    options: [
      {
        key: 'a',
        text: 'Hacerles señas con la mano para que continúen.',
      },
      {
        key: 'b',
        text: 'Tocar la bocina para hacerles notar que usted está ahí.',
      },
      { key: 'c', text: 'Esperar que crucen.' },
      { key: 'd', text: 'Encender sus luces de advertencia de peligro.' },
    ],
    correct: ['c'],
  },
  {
    id: 192,
    text: 'En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta192,
    options: [
      { key: 'a', text: 'Espera permitiéndoles que crucen.' },
      {
        key: 'b',
        text: 'Continúa ya que usted tiene el derecho preferente de paso.',
      },
      { key: 'c', text: 'Les hace señas para que retrocedan.' },
      {
        key: 'd',
        text: 'Les toca la bocina para advertirles su presencia.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 193,
    text: '¿Dónde debe tener usted especial cuidado con los motociclistas?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'En una estación de servicio.' },
      { key: 'b', text: 'En los cruces de calles.' },
      { key: 'c', text: 'En las proximidades de un área de servicio.' },
      {
        key: 'd',
        text: 'Al ingresar a un recinto o área de estacionamientos.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 194,
    text: 'Cuando conduce en la ciudad ¿por qué razón debería usted tener cuidado al cruzarse con un bus que se encuentra detenido en una parada?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Porque el bus puede estar en pana.' },
      {
        key: 'b',
        text: 'Porque el bus puede ponerse en movimiento repentinamente.',
      },
      {
        key: 'c',
        text: 'Porque pueden aparecer peatones detrás del bus.',
      },
      { key: 'd', text: 'Porque el bus puede permanecer detenido.' },
    ],
    correct: ['c'],
  },
  {
    id: 195,
    text: 'Usted se encuentra muy próximo a un cruce en el que pretende virar a la derecha. Delante suyo va un ciclista. ¿Qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Adelanta al ciclista antes del cruce.' },
      { key: 'b', text: 'Rodea al ciclista en el cruce.' },
      {
        key: 'c',
        text: 'Se mantiene detrás del ciclista hasta que éste haya pasado la intersección.',
      },
      {
        key: 'd',
        text: 'Se sitúa al lado del ciclista, sigue en línea recta y desiste de virar.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 196,
    text: 'Usted va conduciendo por un camino de doble tránsito cuando se encuentra con personas que van a caballo delante suyo. ¿Qué es lo primero que usted debería hacer?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Desplazarse hacia el centro de la calzada.' },
      { key: 'b', text: 'Acelerar alrededor de ellos.' },
      { key: 'c', text: 'Señalizar hacia la izquierda.' },
      { key: 'd', text: 'Prepararse para reducir la velocidad.' },
    ],
    correct: ['d'],
  },
  {
    id: 197,
    text: '¿Cómo debería usted adelantar a personas que van a caballo?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Conduciendo lentamente y dejando bastante espacio lateral.',
      },
      {
        key: 'b',
        text: 'Pasando cerca de ellas y adelantándolas lo antes posible.',
      },
      {
        key: 'c',
        text: 'La velocidad no es importante, pero sí el dejar suficiente espacio lateral.',
      },
      {
        key: 'd',
        text: 'Tocando la bocina sólo una vez como señal de advertencia.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 198,
    text: 'Usted va circulando a 65 km/h aproximadamente cuando, lamentablemente, atropella a un peatón. A esa velocidad, ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'es seguro que el peatón morirá.' },
      { key: 'b', text: 'es muy probable que el peatón muera.' },
      { key: 'c', text: 'es seguro que el peatón sobrevivirá.' },
      { key: 'd', text: 'es muy probable que el peatón sobreviva.' },
    ],
    correct: ['b'],
  },
  {
    id: 199,
    text: 'Usted desea adelantar a un motociclista que va delante suyo, ¿qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Trata de pasarlo en una curva.' },
      { key: 'b', text: 'Pasa cerca de él y lo más rápido posible.' },
      {
        key: 'c',
        text: 'Le da tanto espacio lateral como le daría a un automóvil.',
      },
      { key: 'd', text: 'Toca la bocina para advertir su presencia.' },
    ],
    correct: ['c'],
  },
  {
    id: 200,
    text: 'Usted va siguiendo a un automóvil que es conducido por una persona de edad. Usted debería ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'dar por seguro que el conductor manejará muy mal.',
      },
      {
        key: 'b',
        text: 'estar consciente de que las reacciones del conductor pueden no ser tan rápidas como las suyas.',
      },
      { key: 'c', text: 'encender y apagar sus luces y adelantarlo.' },
      {
        key: 'd',
        text: 'mantenerse cerca tras él y conducir cuidadosamente.',
      },
    ],
    correct: ['b'],
  },
  {
    id: 201,
    text: 'Al estacionar su vehículo en un lugar en el que no hay señales que lo permitan ni que lo prohíban, usted no debe ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'dejar el freno de mano puesto.' },
      { key: 'b', text: 'detener el motor.' },
      {
        key: 'c',
        text: 'obstaculizar el tránsito a otros usuarios de la vía.',
      },
      { key: 'd', text: 'estacionar al costado derecho de la calzada.' },
    ],
    correct: ['c'],
  },
  {
    id: 202,
    text: 'Usted nunca debería intentar adelantar a un ciclista ...',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'justo antes de doblar a la derecha.' },
      { key: 'b', text: 'justo antes de doblar a la izquierda.' },
      { key: 'c', text: 'recién pasada una intersección.' },
      { key: 'd', text: 'en un camino de tierra.' },
    ],
    correct: ['a'],
  },
  {
    id: 203,
    text: 'Cuando adelanta a un ciclista usted debe dejar el máximo espacio lateral posible. ¿Por qué?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Porque el ciclista podría cambiar de pista.' },
      {
        key: 'b',
        text: 'Porque el ciclista podría bajarse de la bicicleta.',
      },
      {
        key: 'c',
        text: 'Porque el ciclista podría tener que virar a la izquierda.',
      },
      {
        key: 'd',
        text: 'Porque el ciclista podría desviarse bruscamente.',
      },
    ],
    correct: ['d'],
  },
  {
    id: 204,
    text: 'Cuando el viento está soplando muy fuerte, ¿por qué debe usted dejar un espacio lateral extra al adelantar a un motociclista?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'Porque el motociclista podría doblar repentinamente para escapar del viento.',
      },
      {
        key: 'b',
        text: 'Porque el motociclista podría detenerse repentinamente.',
      },
      {
        key: 'c',
        text: 'Porque el motociclista podría tambalear o ver desviada su trayectoria a consecuencia del viento.',
      },
      {
        key: 'd',
        text: 'Porque el motociclista podría ir más rápido de lo normal.',
      },
    ],
    correct: ['c'],
  },
  {
    id: 205,
    text: '¿De qué le advierte esta señal?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    image: pregunta205,
    options: [
      { key: 'a', text: 'De la posible presencia de escolares.' },
      { key: 'b', text: 'De la proximidad de un cruce de peatones.' },
      { key: 'c', text: 'De la posible presencia de niños jugando.' },
      { key: 'd', text: 'De la proximidad de un parque o plaza.' },
    ],
    correct: ['a'],
  },
  {
    id: 206,
    text: 'Cuando es de noche, al adelantar usted debería ...',
    instruction: 'Marque dos respuestas',
    type: 'multiple',
    selectCount: 2,
    options: [
      {
        key: 'a',
        text: 'tener mucho cuidado porque nuestra capacidad visual se ve reducida.',
      },
      { key: 'b', text: 'mantener en todo momento sus luces altas.' },
      {
        key: 'c',
        text: 'tocar 2 veces la bocina antes de desplazarse hacia la pista izquierda.',
      },
      {
        key: 'd',
        text: 'estar muy atento a las curvas que pueda tener el camino.',
      },
      {
        key: 'e',
        text: 'cambiar de luces altas a bajas repetidas veces antes de iniciar el adelantamiento.',
      },
    ],
    correct: ['a', 'd'],
  },
  {
    id: 207,
    text: 'Por una carretera, usted circula detrás de otro vehículo. Si la calzada está mojada, ¿qué espacio de tiempo mínimo mantiene usted respecto del vehículo que va adelante?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      {
        key: 'a',
        text: 'A lo menos, el equivalente a lo que recorre en 4 segundos.',
      },
      { key: 'b', text: 'El equivalente a lo que recorre en 1 segundo.' },
      { key: 'c', text: 'El equivalente a lo que recorre en 2 segundos.' },
      {
        key: 'd',
        text: 'Como máximo, el equivalente a lo que recorre en 3 segundos.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 208,
    text: 'Usted está conduciendo de noche y es encandilado por las luces delanteras de un vehículo que se aproxima. En estas circunstancias, ¿qué hace usted?',
    instruction: 'Marque una respuesta',
    type: 'single',
    selectCount: 1,
    options: [
      { key: 'a', text: 'Reduce la velocidad o se detiene.' },
      { key: 'b', text: 'Cierra sus ojos.' },
      { key: 'c', text: 'Hace parpadear sus luces.' },
      {
        key: 'd',
        text: 'Baja la visera que tiene su vehículo para protegerlo del sol.',
      },
    ],
    correct: ['a'],
  },
  {
    id: 209,
    text: '¿Cuál o cuáles de las siguientes afirmaciones son correctas en cuanto a la conducción durante la noche?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'En carretera, con luces bajas es posible ver las marcas en el pavimento a 200 m y más.',
      },
      {
        key: 'b',
        text: 'Nuestra limitada capacidad para ver de noche aumenta los riesgos de accidentes.',
      },
      {
        key: 'c',
        text: 'Nuestra capacidad de apreciar distancias en la noche se ve disminuida.',
      },
      {
        key: 'd',
        text: 'El color de las ropas de un peatón influye en que éste pueda ser más o menos visible para los conductores.',
      },
    ],
    correct: ['b', 'c', 'd'],
  },
  {
    id: 210,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción nocturna en un camino rural?',
    instruction: 'Marque la o las respuesta(s) correcta(s)',
    type: 'multiple',
    selectCount: null,
    options: [
      {
        key: 'a',
        text: 'Al cruzarse con otro vehículo siempre hay que poner luces bajas para no encandilar a su conductor.',
      },
      {
        key: 'b',
        text: 'Al acercarse por atrás a otro vehículo hay que poner luces bajas.',
      },
      {
        key: 'c',
        text: 'Al cruzarse con un ciclista no es necesario poner luces bajas.',
      },
      {
        key: 'd',
        text: 'Si el camino es ancho no es necesario poner luces bajas al cruzarse con otro vehículo.',
      },
    ],
    correct: ['a', 'b'],
  },
]
