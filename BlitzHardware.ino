#include <Adafruit_ADXL375.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <FirebaseESP32.h>



#define WIFI_SSID "utexas-iot"
#define WIFI_PASSWORD "43300264591896054189"

// Firebase credentials
#define FIREBASE_HOST "https://convergent-iot-safety-fall24-default-rtdb.firebaseio.com/"
#define FIREBASE_API_KEY "43300264591896054189"

Adafruit_ADXL375 accel = Adafruit_ADXL375(12345);
double total_acceleration;

double g_force;

FirebaseConfig config;
FirebaseAuth auth;
FirebaseData firebaseData;

void setup() {

  Serial.begin(115200);
  while(!Serial){
    delay(10);
  }

   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" connected");


  // Firebase configuration
  config.host = FIREBASE_HOST;
  config.api_key = FIREBASE_API_KEY;

  // Initialize Firebase
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  /* Initialise the sensor */
  if(!accel.begin())
  {
    /* There was a problem detecting the ADXL375 ... check your connections */
    Serial.println("Ooops, no ADXL375 detected ... Check your wiring!");
    while(1);
  }
}


void loop() {
  // put your main code here, to run repeatedly:
  sensors_event_t event;
  accel.getEvent(&event);
  total_acceleration = sqrt(pow(event.acceleration.x,2) + pow(event.acceleration.y,2) + pow(event.acceleration.z,2));

  g_force = total_acceleration / 9.81;
  // Send data to Firebase
  if (Firebase.setFloat(firebaseData, "/accelerometer/g_force", g_force)) {
    continue
  } else {
    Serial.print("Error sending g_force data: ");
    Serial.println(firebaseData.errorReason());
  }

  
  delay(1000);
}
