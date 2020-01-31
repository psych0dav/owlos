#define D0                 3                   /* Pin 0 selected    */
#define D1                 1                   /* Pin 1 selected    */
#define D2                 16                  /* Pin 2 selected    */
#define D3                 5                   /* Pin 3 selected    */
#define D4                 4                   /* Pin 4 selected    */
#define D5                 14                  /* Pin 5 selected    */
#define D6                 12                  /* Pin 6 selected    */
#define D7                 13                  /* Pin 7 selected    */
#define D8                 0                   /* Pin 8 selected    */
#define D9                 2                   /* Pin 9 selected    */
#define D10                15                  /* Pin 10 selected   */
#define D11                ((uint16_t)0x0800)  /* Pin 11 selected   */
#define D12                ((uint16_t)0x1000)  /* Pin 12 selected   */
#define D13                ((uint16_t)0x2000)  /* Pin 13 selected   */
#define A0                 ((uint16_t)0x2000)  /* Pin 13 selected   */

#define  GPIO_MODE_INPUT                        0x00000000U   /*!< Input Floating Mode                   */
#define  GPIO_MODE_OUTPUT                       0x00000001U   /*!< Output Push Pull Mode                 */
#define  GPIO_MODE_ANALOG                       0x00000003U   /*!< Analog Mode  */

typedef struct
{

    uint32_t Pin;       /*!< Specifies the GPIO pins to be configured.
                             This parameter can be any value of @ref GPIO_pins_define */

    uint32_t Mode;      /*!< Specifies the operating mode for the selected pins.
                             This parameter can be a value of @ref GPIO_mode_define */

}
GPIO_InitTypeDef;