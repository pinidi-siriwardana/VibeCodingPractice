# Grade Calculator Script

def main():
    while True:
        # Ask for student's name
        name = input("Enter the student's name (or type 'Exit' to quit): ")
        if name.lower() == "exit":
            break

        # Ask for 3 subject marks
        try:
            mark1 = float(input("Enter marks for Subject 1: "))
            mark2 = float(input("Enter marks for Subject 2: "))
            mark3 = float(input("Enter marks for Subject 3: "))
        except ValueError:
            print("Invalid input. Please enter numeric values for marks.")
            continue

        # Calculate the average
        average = (mark1 + mark2 + mark3) / 3

        # Display results
        print(f"\nStudent: {name}")
        print(f"Average Mark: {average:.2f}")

        if average >= 75:
            grade = "A"
        elif average >= 60:
            grade = "B"
        elif average >= 40:
            grade = "C"
        else:
            grade = "Fail"

        if grade == "Fail":
            print(f"Grade: {grade}")
            print("Status: Fail\n")
        else:
            print(f"Grade: {grade}")
            print("Status: Pass\n")

if __name__ == "__main__":
    main()
