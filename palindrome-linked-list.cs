class Solution {
public:
bool isPalindrome(ListNode* head) {
ListNode* tem = head;
stack st;
while(tem != NULL) {
st.push(tem->val);
tem = tem->next;
}
tem = head;
while(!(st.empty())) {
if(tem->val != st.top())
return false;
st.pop();
tem = tem->next;
}
return true;
}
};