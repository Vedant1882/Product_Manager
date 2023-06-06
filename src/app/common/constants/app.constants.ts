export class AppConstants{
    public static dateFormat='dd-MMM-yyyy'

    public static url="https://localhost:7051/api/"

    public static emailValidation="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"

    public static phonenumberValidation="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"

    public static passwordValidation= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
}