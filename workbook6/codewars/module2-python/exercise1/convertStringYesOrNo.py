# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

def bool_to_word(boolean):
    if boolean:
        return "Yes"
    else:
        return "No"
print(bool_to_word(True))  # Output: yes
print(bool_to_word(False)) # Output: no